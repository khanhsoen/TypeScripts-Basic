var stdService = new StudentService();
stdService.showListToTables();
var code = document.getElementById("code");
function themMoi() {
    stdService.addStudent();
}
function xoa(stdCode) {
    stdService.deleteStudent(stdCode);
}
function timkiem_code() {
    let index = document.getElementById("tim_code");
    stdService.findByCode(index.value);
}
