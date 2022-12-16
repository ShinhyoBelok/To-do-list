class Task {
  constructor(description, listOfTask, status = false) {
    this.description = description;
    this.completed = status;
    this.index = listOfTask.length;
  }
}

export default Task;