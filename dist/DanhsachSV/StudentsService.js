System.register(["./StudentsObject.js"], function (exports_1, context_1) {
    "use strict";
    var StudentsObject_js_1, StudentService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (StudentsObject_js_1_1) {
                StudentsObject_js_1 = StudentsObject_js_1_1;
            }
        ],
        execute: function () {
            StudentService = class StudentService {
                constructor() {
                    this.data = this.setData();
                }
                setData() {
                    let dataInStorage = localStorage.getItem("data");
                    if (dataInStorage) {
                        return JSON.parse(dataInStorage);
                    }
                    return [
                        new StudentsObject_js_1.StudentObject("1", "Luke Skywalker", 8, 2, 4),
                        new StudentsObject_js_1.StudentObject("2", "Darth Vader", 9, 5, 4),
                        new StudentsObject_js_1.StudentObject("3", "Leia Organa", 7, 6, 8),
                        new StudentsObject_js_1.StudentObject("4", "Obi-Wan Kenobi", 10, 8, 9),
                    ];
                }
                showListToTables() {
                    let tbody = document.getElementById("tbody-list");
                    let _tr = "";
                    for (let obj of this.data) {
                        let dtb = (obj.toan + obj.hoa + obj.ly) / 3;
                        let xl = "";
                        if (dtb < 5) {
                            xl = "Yếu";
                        }
                        else if (dtb >= 5 && dtb < 7) {
                            xl = "Trung Bình";
                        }
                        else if (dtb >= 7 && dtb < 8) {
                            xl = "Khá";
                        }
                        else if (dtb >= 8 && dtb < 10) {
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
                        <button class="btn btn-sm btn-primary btn-edit" data-id='${obj.code}'>Sửa</button>
                    </td>
                    <td>
                        <button class="btn btn-sm btn-danger btn-delete" data-id='${obj.code}'>Xoá</button>
                    </td>
                </tr>`;
                    }
                    tbody.innerHTML = _tr;
                }
                addStudent() {
                    var form = document.getElementById("std_form");
                    let std = {
                        code: form.code.value,
                        name: form.hoten.value,
                        toan: parseFloat(form.toan.value),
                        ly: parseFloat(form.ly.value),
                        hoa: parseFloat(form.hoa.value),
                    };
                    this.data.push(std);
                    let jsonData = JSON.stringify(this.data);
                    localStorage.setItem("data", jsonData);
                    this.showListToTables();
                }
                deleteStudent(code) {
                    var index = this.data.findIndex(function (obj) {
                        return obj.code == code;
                    });
                    this.data.splice(index, 1);
                    let jsonData = JSON.stringify(this.data);
                    localStorage.setItem("data", jsonData);
                    this.showListToTables();
                }
                findByCode(code) {
                    let timCode = this.data.filter(function (data) {
                        return data.code.toLowerCase() == code.toLowerCase();
                    });
                    return timCode;
                }
                findByName(code) {
                    let timCode = this.data.filter(function (data) {
                        return data.code.toLowerCase() == code.toLowerCase();
                    });
                    this.data = timCode;
                    this.showListToTables();
                }
                update(code) {
                    var index = this.data.findIndex(function (obj) {
                        return obj.code == code;
                    });
                    var form = document.getElementById("std_form");
                    this.data[index].name = form.hoten.value;
                    this.data[index].toan = parseFloat(form.toan.value);
                    this.data[index].ly = parseFloat(form.ly.value);
                    this.data[index].hoa = parseFloat(form.hoa.value);
                    let jsonData = JSON.stringify(this.data);
                    localStorage.setItem("data", jsonData);
                    this.showListToTables();
                }
            };
            exports_1("default", StudentService);
        }
    };
});
