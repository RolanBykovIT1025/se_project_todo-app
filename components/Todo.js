class Todo {
  constructor(data, templateSelector, handleCheck, handleDelete) {
    this._text = data.text;
    this._completed = data.completed || false;
    this._templateSelector = templateSelector;
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
    this._data = data;
  }

  _setEventListeners() {
    this._todoElement
      .querySelector(".todo__delete-btn")
      .addEventListener("click", () => {
        this._handleDelete(this);
      });

    this._todoElement
      .querySelector(".todo__completed")
      .addEventListener("change", () => {
        this._toggleCompletion();
        this._handleCheck(this);
      });
  }

  _toggleCompletion() {
    this._completed = !this._completed;
    this._todoElement.querySelector(".todo__completed").checked =
      this._completed;
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._templateElement = document.querySelector(this._templateSelector);
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    this._todoNameEl = this._todoElement.querySelector(".todo__name");
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    this._todoNameEl.textContent = this._data.name;

    this._data.date = new Date(this._data.date);

    if (isNaN(this._data.date.getTime())) {
      this._todoDate.textContent = "";
    } else {
      this._todoDate.textContent = `${
        this._data.date.getMonth() + 1
      }/${this._data.date.getDate()}/${this._data.date.getFullYear()}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners(); // Moved this line here

    return this._todoElement;
  }
}

export default Todo;
