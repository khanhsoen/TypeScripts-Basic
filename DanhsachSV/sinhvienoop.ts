import STDSV from "./StudentsService.js";

declare var $: any;

var stdService = new STDSV();
$("#btn-update").hide();
$("#btn-add").show();
stdService.showListToTables();

$("#btn-add").click(function () {
   if ($("#code").val() == "") {
      alert("Please enter a code");
      return false;
   } else if ($("#code").val().length != 4) {
      alert("Mã sinh viên  phải có 3 ký tự");
      return false;
   } else {
      let stdcode = stdService.findByCode($("#code").val());
      if (stdcode.length > 0) {
         alert("Mã đã được sử dụng");
         return false;
      }
   }
   if ($("#hoten").val() == "") {
      alert("Please enter a name");
      return false;
   }
   stdService.addStudent();
});

$(document).on("click", ".btn-edit", function () {
   var srdCode: any = $(this).data("id"); // tiền tố là data, hậu tố là id  || không có hậu tố vẫn đc
   let sdtByCode = stdService.findByCode(srdCode);

   if (sdtByCode.length > 0) {
      $("#code").val(sdtByCode[0].code); //gán dữ liệu cho fill #code
      $("#hoten").val(sdtByCode[0].name);
      $("#toan").val(sdtByCode[0].toan);
      $("#ly").val(sdtByCode[0].ly);
      $("#hoa").val(sdtByCode[0].hoa);
      $("#btn-update").show();
      $("#btn-add").hide();
   }

   $("#code").prop("readonly", true);
});

$(document).on("click", "#btn-update", function () {
   var code = $("#code").val();
   stdService.update(code);
   $("#std_form").trigger("reset");
   $("#btn-update").hide();
   $("#btn-add").show();
   $("#code").prop("readonly", false);
});

$(document).on("click", ".btn-delete", function () {
   var srdCode: any = $(this).data("id"); // tiền tố là data, hậu tố là id  || không có hậu tố vẫn đc
   stdService.deleteStudent(srdCode);
});

$(document).on("click", ".btn-search", function () {
   var search_Code: any = $("#tim_code").val(); // tiền tố là data, hậu tố là id  || không có hậu tố vẫn đc

   if (search_Code != "") stdService.findByName(search_Code);
   else location.reload();
});

//************************************************************************************************
var code: any = document.getElementById("code");
function themMoi() {
   stdService.addStudent();
}
function xoa(stdCode: string) {
   // alert(stdCode);
   stdService.deleteStudent(stdCode);
}

function timkiem_code() {
   let index: any = document.getElementById("tim_code");
   stdService.findByCode(index.value);
}
