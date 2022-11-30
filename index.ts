console.log("hello world");
var a: number;
a = 1;
console.log(a);

var z = function (x: number, y: string): string {
   return "chao ${y} nam nay ban ${x} tuoi phai không";
};
console.log(z(18, "khanh"));

// cách khai báo hàm

// cách 1:
var g: (x: number, y: string) => string = function (x, y) {
   // Khai bao truoc sau do moi dinh nghia
   return `Chao ${y}, nam nay ban ${x} tuoi phai khong?`;
};
console.log(g(18, "ahihi"));

// cách 2
var h = (x: number): number => {
   return x;
};

console.log(h(18));

// cách 3
function xem(x: number): number {
   return x + 1;
}
console.log(xem(20));


