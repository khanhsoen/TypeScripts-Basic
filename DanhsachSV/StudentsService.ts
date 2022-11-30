import { StudentObject as STD } from "./StudentsObject.js";

export default class StudentService {
   data: Array<STD>;

   constructor() {
      this.data = this.setData();
   }

   //Tao du lieu, khoong cho sua doi tu ben ngoai
   private setData(): Array<STD> {
      let dataInStorage = localStorage.getItem("data"); //dangj chuoi
      if (dataInStorage) {
         return JSON.parse(dataInStorage); // CHUYEENR CHUOI JSON SANG MANG OBJECT
      }
      return [
         new STD("1", "Luke Skywalker", 8, 2, 4),
         new STD("2", "Darth Vader", 9, 5, 4),
         new STD("3", "Leia Organa", 7, 6, 8),
         new STD("4", "Obi-Wan Kenobi", 10, 8, 9),
      ];
   }

   public showListToTables(): void {
      let tbody: any = document.getElementById("tbody-list");
      let _tr = "";
      for (let obj of this.data) {
         let dtb = (obj.toan + obj.hoa + obj.ly) / 3;
         let xl = "";
         if (dtb < 5) {
            xl = "Yếu";
         } else if (dtb >= 5 && dtb < 7) {
            xl = "Trung Bình";
         } else if (dtb >= 7 && dtb < 8) {
            xl = "Khá";
         } else if (dtb >= 8 && dtb < 10) {
            xl = "Giỏi";
         }
         _tr += `<tr>
                    <td>${obj.code}</td>
                    <td>${obj.name}</td>
                    <td>${obj.toan}</td>
                    <td>${obj.ly}</td>
                    <td>${obj.hoa}</td>
                    <td>${dtb.toFixed(1)}</td>
                    <td>${xl}</td>
                    <td>
                        <button class="btn btn-sm btn-primary btn-edit" data-id='${
                           obj.code
                        }'>Sửa</button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger btn-delete" data-id='${
                           obj.code
                        }'>Xoá</button>
                    </td>
                </tr>`;
      }
      tbody.innerHTML = _tr;
   }

   addStudent(): void {
      var form: any = document.getElementById("std_form");
      let std: STD = {
         code: form.code.value,
         name: form.hoten.value,
         toan: parseFloat(form.toan.value),
         ly: parseFloat(form.ly.value),
         hoa: parseFloat(form.hoa.value),
      };
      this.data.push(std);
      // LƯU vào Storage
      // chuyển mảng đối tưongwj sang chuỗi json như chuỗi
      let jsonData = JSON.stringify(this.data);
      //luuw vaof storage
      localStorage.setItem("data", jsonData);

      //   this.data = this.setData();
      this.showListToTables();
   }

   deleteStudent(code: string) {
      var index = this.data.findIndex(function (obj) {
         return obj.code == code;
      });
      //loại bỏ phần tử ra khỏi mảng
      this.data.splice(index, 1);
      let jsonData = JSON.stringify(this.data);
      //luuw vaof storage
      localStorage.setItem("data", jsonData);
      this.showListToTables();
   }

   findByCode(code: string): any {
      let timCode = this.data.filter(function (data) {
         return data.code.toLowerCase() == code.toLowerCase();
         // return data.name.includes(code); // includes tìm gần đúng
      });
      return timCode;
   }
   findByName(code: string): any {
      let timCode = this.data.filter(function (data) {
         return data.code.toLowerCase() == code.toLowerCase();
         // return data.name.includes(code); // includes tìm gần đúng
      });
      this.data = timCode;
      this.showListToTables();
      // alert(code);
   }

   update(code: string): any {
      var index = this.data.findIndex(function (obj) {
         return obj.code == code;
      });

      var form: any = document.getElementById("std_form");
      this.data[index].name = form.hoten.value;
      this.data[index].toan = parseFloat(form.toan.value);
      this.data[index].ly = parseFloat(form.ly.value);
      this.data[index].hoa = parseFloat(form.hoa.value);
      let jsonData = JSON.stringify(this.data);
      //luuw vaof storage
      localStorage.setItem("data", jsonData);
      this.showListToTables();
   }
}
