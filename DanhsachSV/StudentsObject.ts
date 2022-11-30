export class StudentObject {
   code: string;
   name: string;
   toan: number;
   ly: number;
   hoa: number;

   constructor(
      code: string,
      name: string,
      toan: number,
      ly: number,
      hoa: number
   ) {
      this.code = code;
      this.name = name;
      this.toan = toan;
      this.ly = ly;
      this.hoa = hoa;
   }
}
