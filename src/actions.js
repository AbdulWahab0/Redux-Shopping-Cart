export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";

export function removeItem(id) {
  return { type: REMOVE, payload: { id } };
}
export function increaseItem(id) {
  return { type: INCREASE, payload: { id } };
}
export function decreaseItem(id, amount) {
  return { type: DECREASE, payload: { id, amount } };
}
export function toggleItem(id, toggle) {
  return { type: TOGGLE_AMOUNT, payload: { id, toggle } };
}
