import * as category from "./category";

export default async function(router) {
  router.get("/api/category", category.getAllCategories);
}
