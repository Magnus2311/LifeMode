export function handleKnowledgeCategoryClick(event, history) {
  var id = event.currentTarget.getAttribute("data-id");
  debugger;
  if (id > 0) history.push(`/knowledge/articles/${id}`);
}
