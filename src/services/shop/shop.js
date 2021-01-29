export function handleShopCategoryClick(event, history) {
  var id = event.currentTarget.getAttribute("data-id");
  if (id > 0) history.push(`/shop/shopItems/${id}`);
}
