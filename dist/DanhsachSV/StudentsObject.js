System.register([], function (exports_1, context_1) {
    "use strict";
    var StudentObject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            StudentObject = class StudentObject {
                constructor(code, name, toan, ly, hoa) {
                    this.code = code;
                    this.name = name;
                    this.toan = toan;
                    this.ly = ly;
                    this.hoa = hoa;
                }
            };
            exports_1("StudentObject", StudentObject);
        }
    };
});
