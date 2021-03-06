const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

export const sumItems = (cartItems) => {
  Storage(cartItems);
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.cartItems.find((item) => item.id === action.product.id)) {
        state.cartItems.push({
          ...action.product,
          quantity: action.quantity,
        });
      }

      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        ...sumItems(
          state.cartItems.filter((item) => item.id !== action.product.id)
        ),
        cartItems: [
          ...state.cartItems.filter((item) => item.id !== action.product.id),
        ],
      };
    case "INCREASE":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.product.id)
      ].quantity =
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.product.id)
        ].quantity + action.quantity;
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "SETEXACTQUANTITY":
      state.cartItems[
        state.cartItems.findIndex((item) => item.id === action.product.id)
      ].quantity = parseInt(action.quantity);
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems],
      };
    case "DECREASE":
      if (
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.product.id)
        ].quantity <= 1
      ) {
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.product.id)
        ].quantity = 1;
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
      } else {
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.product.id)
        ].quantity--;
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
      }
    case "CHECKOUT":
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case "CLEAR":
      return {
        cartItems: [],
        ...sumItems([]),
      };
    default:
      return state;
  }
};
