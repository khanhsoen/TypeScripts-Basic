## Khai báo hàm

Có 3 cách khai báo hàm

```bash
    // cách 1:
        var g: (x: number, y: string) => string = function (x, y) {
        return `Chao ${y}, nam nay ban ${x} tuoi phai khong?`; // Khai bao truoc sau do moi dinh nghia
        };

    // cách 2
        var h = (x: number): number => {
        return x;
        };

    // cách 3
        function xem(x: number): number {
        return x + 1;
        }
```

## Dữ liệu trả về là 1 mảng

Dữ liệu trả về mảng có kiểu dữ liệu là 1 object

```bash
        class StudentService {
        data: Array<StudentObject>;
        constructor() {
            this.data = this.setData();
        }
   //Tao du lieu
        private setData(): Array<StudentObject> {
            return [
                new StudentObject("1", "Luke Skywalker", 8, 2, 4),
                new StudentObject("2", "Darth Vader", 9, 5, 4),
                new StudentObject("3", "Leia Organa", 7, 6, 8),
                new StudentObject("4", "Obi-Wan Kenobi", 10, 8, 9),
            ];
        }
}
```

## Lấy dữ liệu từ form

có 2 cách:

```bash
    Cách 1: lấy trực tiếp:
        var code: any = document.getElementById("code");
        function themMoi() {
        console.log(code.value);
        }

    Cách 2: cũng lấy trực tiếp nhưng mà thông qua id của chính form đó
        var form: any = document.getElementById("std_form");
        function themMoi() {
        console.log(form.hoten.value);
        }
```

## Đẩy dữ liệu vào dâta

dùng hàm push

```bash
    stdService.data.push(std);
```

## Ép kiểu dữ liệu

dùng hàm parse;

```bash
    toan: parseFloat(form.toan.value),
```

## Luư vào Storage

```bash
    // 1. chuyển mảng đối tượng mảng sang chuỗi json như chuỗi
        let jsonData = JSON.stringify(this.data);
    // 2. lưu vào storage có tên là data
        localStorage.setItem("data", jsonData);
```

## Lấy dữ liệu từ Storage

```bash
    // 1. lấy dữ liệu ra
        let dataInStorage = localStorage.getItem("data");
    // 2. nếu trong Storage có dữ liệu -> thì sẽ chuyển đổi chuỗi JSON sang lại Object
        if (dataInStorage) {
            return JSON.parse(dataInStorage);
        }
```

## Một số hàm xử lý hay dùng

```bash
    findIndex();
    stringify();
    filter();
    splice();
    push();// đưa dữ liệu lên
    localStorage.setItem();
    localStorage.getItem();
```

## Export và Import

```bash
    1. download file system.min.js
    2.
        <script src="/dist/system.min.js"></script>
        <script>
            System.import('../dist/DanhsachSV/sinhvienoop.js');
        </script>
    3. Thay đổi file tsconfig.json từ Commonjs thành System để trình duyệt biên dịch đúng
    "module": "System", // AMD, system, UMD,...

    4. Vì trình duyệt cần phải có đuôi mở rộng nên phải sửa file import có đuôi .js
    import { StudentService } from "./StudentsService.js";
```

## Export default

chỉ cần đừng dẫn đúng tên file import đặt tuỳ ý

```bash
    1. Câu lệnh: export default class StudentService{}
    2. import STDSV from "./StudentsService.js";
        var stdService = new STDSV();

    *Lưu ý: có thể Export và Import các biến, hàm...; Cú pháp tương tự Export và Import các class
```

## sử dụng jQuery

```bash
    $(".btn-delete").click(function () {
    var srdCode:string = $(this).data("id")
    stdService.deleteStudent(srdCode);
    });

    ******************************** dùng jQuery đi từ nút gốc(lớn) document để đảm bảo html đc load trước khi thực hiện 1 sự kiên nào đó

   $(document).on("click", ".btn-delete", function () {
   var srdCode: any = $(this).data("id"); // tiền tố là data-hậu tố là id
   stdService.deleteStudent(srdCode);
});
```
