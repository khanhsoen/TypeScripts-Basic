class Caculator {
   private _soa: number;
   private _sob: number;

   tinhChiadu: () => any;

   public constructor(_soa: number, _sob: number) {
      this._soa = _soa;
      this._sob = _sob;
   }

   // public get Soa(): number {
   //    return this._soa;
   // }

   // public set Soa(value: number) {
   //    this._soa = value;
   // }

   // public get Sob(): number {
   //    return this._sob;
   // }

   // public set Sob(value: number) {
   //    this._sob = value;
   // }

   public tinhCong(): number {
      return this._soa + this._sob;
   }
   public tinhTru(): number {
      return this._soa - this._sob;
   }
   public tinhNhan(): number {
      return this._sob * this._soa;
   }
   public tinhChia(): number {
      return this._sob / this._soa;
   }
}

Caculator.prototype.tinhChiadu = function () {
   return this._soa / this._sob;
};

class Mycaculator {
   numbers: Array<number>;
   constructor(...args: Array<number>) {
      this.numbers = args;
   }
   execute(op: string = "+"): number {
      if (op == "+") {
         let total = 0;
         for (let i = 0; i < this.numbers.length; i++) {
            total += this.numbers[i];
         }
         return total;
      }
      if (op == "*") {
         let total = this.numbers[0]; // cờ
         this.numbers.shift(); // loại bỏ phần tử đầu tiên;
         for (let num of this.numbers) {
            total *= num;
         }
         return total;
      }
      if (op == "-") {
         let total = this.numbers[0]; // cờ
         this.numbers.shift(); // loại bỏ phần tử đầu tiên;
         for (let num of this.numbers) {
            total -= num;
         }
         return total;
      }
      if (op == "/") {
         let total = this.numbers[0]; // cờ
         this.numbers.shift(); // loại bỏ phần tử đầu tiên;
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
