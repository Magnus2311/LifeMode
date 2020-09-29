let tempCategories = [];

export default function findAllParentCategories(categoryId, categories) {
  var category = categories && categories.find((c) => c && c.id === categoryId);
  if (category && category.parentId)
    findAllParentCategories(category.parentId, categories);
  else tempCategories = [];
  tempCategories.push(category);
  return tempCategories;
}

export function handleCategoryClick(event, categories, history) {
  var category = categories.find(
    (category) => category.id === event.currentTarget.getAttribute("data-id")
  );

  if (category && category.subCategories.length > 0)
    history.push(`/categories/${category.id}`);
  else history.push(`/products/${category.id}`);
}
