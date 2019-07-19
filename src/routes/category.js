import Category from "../services/category";
import handleError from "../common/handleErrors";

const category = new Category();

export async function getAllCategories(context) {
  context.body = await category.getAll().catch(handleError.bind(this));
}
