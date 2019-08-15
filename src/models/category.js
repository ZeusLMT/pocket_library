import uniqid from "uniqid";

class Category {
  constructor(name) {
    this.id = uniqid();
    this.name = name;
  }
}

export default Category;
