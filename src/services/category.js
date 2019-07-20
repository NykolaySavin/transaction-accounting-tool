const models = require("../db/postgres");

export default class Category {
  getById(id) {
    return models.category.findByPk(id);
  }

  getAll() {
    return models.category.findAll();
  }
  updateСategory(data) {
    return models.category
      .findByPk(data.id)
      .then(category => category.update({ ...data }));
  }

  addCategory(data) {
    return models.category.create({
      percent: data.percent,
      type: data.type,
      name: data.name
    });
  }
  deleteCategory(id) {
    return models.category
      .findByPk(id)
      .then(category => category.destroy());
  }
}
