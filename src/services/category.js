const models = require("../db/postgres");

export default class Category {
  getById(id) {
    return models.Category.findByPk(id);
  }

  getAll() {
    return models.Category.findAll();
  }
}
