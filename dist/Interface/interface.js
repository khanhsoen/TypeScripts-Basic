var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class fileAdapter {
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = [
                {
                    name: "A",
                    email: "A@gmail.com",
                    phone: "123",
                    address: "NhaTrang",
                    age: 29,
                },
                {
                    name: "B",
                    email: "B@gmail.com",
                    phone: "1233",
                    address: "NhaTrang",
                    age: 29,
                },
                {
                    name: "C",
                    email: "C@gmail.com",
                    phone: "12323",
                    address: "NhaTrang",
                    age: 29,
                },
            ];
            return data;
        });
    }
}
class ContactApp {
    constructor(adapter) {
        this.adapter = adapter;
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const contact = yield this.adapter.getData();
            console.table(contact);
        });
    }
}
const adapter = new fileAdapter();
const contactApp = new ContactApp(adapter);
contactApp.render();
