export default function goodsReducer(goods = [], action) {
  switch (action.type) {
    case "CREATE_GOODS":
      return [...goods, goods.push(action.goods)];
    case "SAVE_GOODS_SUCCESS":
      return [...goods, goods.push(action.goods)];
    default:
      return goods;
  }
}
