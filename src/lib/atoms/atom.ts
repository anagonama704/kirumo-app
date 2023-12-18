import { atom, selector } from "recoil";
import { cartList, clotherList } from "../../../api/@types";
type atomList = {
  key: string;
  default: cartList[];
};

export const cartState = atom<atomList[]>({
  key: "textState",
  default: [],
});
export const cartSelector = selector({
  key: "textSelector",
  get: ({ get }) => get(cartState),
  set: ({ set }, newValue) => set(cartState, newValue),
});
