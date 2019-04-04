"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = addToCart;

function addToCart() {
  console.log('Add to cart');
  return true;
} // const noop = () => {}
// function formatProductForRequest(product) {
//   // ...
// }
// export function addToCart(product, onSuccess = noop, onFailure = noop) {
//   return (dispatch, getState) => {
//     dispatch(cartAddAttempt(())
//     const params = formatProductForRequest(product)
//     fetch(params)
//       .then((res) => dispatch(cartAddSuccess(res)))
//       .then(onSuccess)
//       .catch((res) => dispatch(cartAddFailure(res)))
//       .then(onFailure)
//   }
// }