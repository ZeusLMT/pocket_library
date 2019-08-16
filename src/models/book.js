import uniqid from "uniqid";

class Book {
  constructor(title, author, category, cover, overview) {
    this.id = uniqid();
    this.title = title;
    this.author  = author;
    this.category = category;
    this.cover = cover;
    this.overview = overview;
  }
}

export default Book;
