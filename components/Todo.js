class Todo {
  constructor(data, selector) {
    console.log(data);
    console.log(selector);
    this._data = data;
    this._templateElement = document.querySelector(selector);
  }

  _setEventListeners() {
    this._todoDeleteBtn.addEventListener("click", () => {
        this._element.remove();
    });

    this._todoCheckboxEl.addEventListener("change", () => {
        this._data.completed = !this.data.completed;
        console.log(this._data.completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

      this._element = this._todoElement;

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    this._todoDeleteBtn = todoDeleteBtn;
    const date = new Date(this._data.date);
    todoNameEl.textContent = this._data.name;
    todoDate.textContent = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    this._generateCheckboxEl();
    this._setEventListeners();
    
    return this._todoElement;
  }
}

export default Todo;
