var EnumState;
(function (EnumState) {
    EnumState["NhaTrang"] = "NhaTrang";
    EnumState["KhanhHoa"] = "KhanhHoa";
    EnumState["PhuYen"] = "PhuYen";
})(EnumState || (EnumState = {}));
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getItems() {
        return this.tasks;
    }
}
let tasksService = new TaskService([
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
