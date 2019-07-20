import Category from "../services/category";
import handleError from "../common/handleErrors";

const category = new Category();

export async function getAllCategories(context) {
  context.body = await category.getAll().catch(handleError.bind(this));
}
export async function addCategory(context) {
  const data = context.request.body;
  context.body = await category.addCategory(data).catch(handleError.bind(this));
}

export async function updateCategory(context) {
  const data = Object.assign({}, context.request.body, {
    id: context.params.id
  });
  context.body = await category
    .updateСategory(data)
    .catch(handleError.bind(this));
}
