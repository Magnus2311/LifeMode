export function handleItemClick(event, history) {
  var id = event.currentTarget.getAttribute("data-id");
  debugger;
  if (id > 0) history.push(`/shop/shopItems/shopItem/${id}`);
}
