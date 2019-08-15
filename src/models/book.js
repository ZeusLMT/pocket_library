import uniqid from "uniqid";

class Book {
  constructor(title, author, category) {
    this.id = uniqid();
    this.title = title;
    this.category = category;
  }
}

export default Book;
