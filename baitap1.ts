function setData(): Array<any> {
   return [
      { name: "Khanh", code: "nt09", toan: 9, ly: 10, hoa: 8 },
      { name: "Khue", code: "nt08", toan: 8, ly: 8, hoa: 8 },
      { name: "Đat", code: "nt08", toan: 7, ly: 8, hoa: 5 },
      { name: "Nhi", code: "nt08", toan: 3, ly: 4, hoa: 5 },
      { name: "Huy", code: "nt07", toan: 6, ly: 5, hoa: 8 },
   ];
}

// var myData: Array<any> = [
//    { name: "Khanh", code: "nt09", toan: 9, ly: 10, hoa: 8 },
//    { name: "Khue", code: "nt08", toan: 8, ly: 8, hoa: 8 },
//    { name: "Đat", code: "nt08", toan: 7, ly: 8, hoa: 5 },
//    { name: "Nhi", code: "nt08", toan: 3, ly: 4, hoa: 5 },
//    { name: "Huy", code: "nt07", toan: 6, ly: 5, hoa: 8 },
// ];
var myData = setData();
function in_mang(data: any) {
   var _tr = "";
   for (let obj of data) {
      let xepLoai = "";
      let markAvg = (obj.toan + obj.ly + obj.hoa) / 3;
      if (markAvg < 5) {
         xepLoai = "Yếu";
      } else if (markAvg >= 5 && markAvg < 6.5) {
         xepLoai = "Trung Bình";
      } else if (markAvg >= 6.5 && markAvg < 8) {
         xepLoai = "Khá";
      } else if (markAvg >= 8 && markAvg <= 10) {
         xepLoai = "Giỏi";
      }
      _tr += ` <tr>
                <td>${obj.code}</td>
                <td>${obj.name}</td>
                <td>${obj.toan}</td>
                <td>${obj.ly}</td>
                <td>${obj.hoa}</td>
                <td>${markAvg.toFixed(1)}</td>
                <td>${xepLoai}</td>
            </tr>`;
   }
   var tbody = document.getElementById("tbody-list");
   tbody.innerHTML = _tr;
}
//duyet mang
in_mang(myData);

//ham lọc điểm
let locDiem = (): void => {
   let diem: any = document.getElementById("diem");

   // tạo mảng mới đã loc
   let newData = myData.filter(function (obj1) {
      let markAvg = ((obj1.toan + obj1.ly + obj1.hoa) / 3).toFixed(1);
      return markAvg > diem.value;
   });

   in_mang(newData);
};

function sap_xep_theo_diem(select: any) {
   // có 2 cách query thẻ option

   //    var tang_giam: any = document.getElementById("sap_xep"); // cách 1
   //    console.log(tang_giam);

   console.log(this.sap_xep); // cách 2

   if (select.value == "tang") {
      //sx tangw
      let sortData = myData.sort(function (a, b) {
         let markAvga = ((a.toan + a.ly + a.hoa) / 3).toFixed(1);
         let markAvgb = ((b.toan + b.ly + b.hoa) / 3).toFixed(1);
         return markAvga < markAvgb ? -1 : 1;
      });
      console.table(sortData);
      in_mang(sortData);
   } else if (select.value == "giam") {
      //sx giam
      let sortData = myData.sort(function (a, b) {
         let markAvga = ((a.toan + a.ly + a.hoa) / 3).toFixed(1);
         let markAvgb = ((b.toan + b.ly + b.hoa) / 3).toFixed(1);
         return markAvga > markAvgb ? -1 : 1;
      });
      console.table(sortData);
      in_mang(sortData);
   } else {
      let myData = setData();
      in_mang(myData);
      //mac dinh
   }
}
