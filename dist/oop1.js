class Caculator {
    constructor(_soa, _sob) {
        this._soa = _soa;
        this._sob = _sob;
    }
    tinhCong() {
        return this._soa + this._sob;
    }
    tinhTru() {
        return this._soa - this._sob;
    }
    tinhNhan() {
        return this._sob * this._soa;
    }
    tinhChia() {
        return this._sob / this._soa;
    }
}
Caculator.prototype.tinhChiadu = function () {
    return this._soa / this._sob;
};
class Mycaculator {
    constructor(...args) {
        this.numbers = args;
    }
    execute(op = "+") {
        if (op == "+") {
            let total = 0;
            for (let i = 0; i < this.numbers.length; i++) {
                total += this.numbers[i];
            }
            return total;
        }
        if (op == "*") {
            let total = this.numbers[0];
            this.numbers.shift();
            for (let num of this.numbers) {
                total *= num;
            }
            return total;
        }
        if (op == "-") {
            let total = this.numbers[0];
            this.numbers.shift();
            for (let num of this.numbers) {
                total -= num;
            }
            return total;
        }
        if (op == "/") {
            let total = this.numbers[0];
            this.numbers.shift();
            for (let num of this.numbers) {
                total /= num;
            }
            return total;
        }
    }
}
var tinh = new Caculator(20, 10);
console.log("Tính Cộng: ", tinh.tinhCong());
console.log("Tính Trừ: ", tinh.tinhTru());
console.log("Tính Nhân: ", tinh.tinhNhan());
console.log("Tính Chia: ", tinh.tinhChia());
console.log("Tính Chia dư: ", tinh.tinhChiadu());
var tinh2 = new Mycaculator(4, 5);
console.log(tinh2.execute("+"));
console.log(tinh2.execute("-"));
console.log(tinh2.execute("*"));
console.log(tinh2.execute("/"));
