class TodoCounter {
    constructor(todos, selector) {
        this.element = document.querySelector(selector);
        this.total = todos.length;
        this.completed = todos.filter((todo) => todo.completed).length;
        this._updateText();
    }

    updateCompleted = (increment) => {
        this.completed += increment ? 1 : -1;
        this._updateText();
    };
    
    updateTotal = (increment) => {
        this.total = increment ? this.total + 1 : this.total - 1;
        this._updateText();
    };

  _updateText() {
    // Sets the text content of corresponding text element.
    // Call this in the constructor, and whenever the counts get updated.
    this.element.textContent = `Showing ${this.completed} out of ${this.total} completed`;
  }
}

export default TodoCounter;
