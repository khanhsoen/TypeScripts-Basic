interface Contact {
   name: string;
   email: string;
   phone: string;
   address: string;
   age?: number;
}

interface ContactAdapter {
   getData: () => Promise<Contact[]>; //tra ve 1 mang cac obj la contact
}

class fileAdapter implements ContactAdapter {
   async getData() {
      const data: Contact[] = [
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
   }
}

class ContactApp {
   adapter: ContactAdapter;
   constructor(adapter: ContactAdapter) {
      this.adapter = adapter;
   }

   async render() {
      const contact: Contact[] = await this.adapter.getData();
      console.table(contact);
   }
}

const adapter = new fileAdapter();

const contactApp = new ContactApp(adapter);

contactApp.render();
