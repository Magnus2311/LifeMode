export function handleKnowledgeCategoryClick(event, history) {
  var id = event.currentTarget.getAttribute("data-id");
  if (id > 0) history.push(`/knowledge/article/${id}`);
}
