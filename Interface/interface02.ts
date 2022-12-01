enum EnumState {
   NhaTrang = "NhaTrang",
   KhanhHoa = "KhanhHoa",
   PhuYen = "PhuYen",
}
interface ITask {
   id: string;
   name: string;
   state?: EnumState;
   email: string;
}

class TaskService {
   tasks: ITask[];
   constructor(tasks: ITask[]) {
      this.tasks = tasks;
   }
   getItems() {
      return this.tasks;
   }
}

let tasksService: TaskService = new TaskService([
   {
      id: "1",
      name: "Task",
      state: EnumState.KhanhHoa,
      email: "task@gmail.com",
   },
   {
      id: "2",
      name: "Tem",
      email: "taTemsk@gmail.com",
      state: EnumState.PhuYen,
   },
   { id: "3", name: "Kiem", email: "taTemsk@gmail.com" },
]);

console.table(tasksService.getItems());
