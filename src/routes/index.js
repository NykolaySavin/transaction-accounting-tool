import * as category from "./category";

export default async function(router) {
  router.get("/api/category", category.getAllCategories);
  router.post("/api/category", category.addCategory);
  router.put("/api/category/:id", category.updateCategory);
}
