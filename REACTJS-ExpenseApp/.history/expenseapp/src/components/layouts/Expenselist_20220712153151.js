import { atom, selector } from "recoil";
export const ExpenseList = atom({
  key: "Expense",
  default: [],
});
export const Splitdate = selector({
  key: "Splitdate",
  get: ({ get }) => {
    const newData = get(ExpenseList).map((item, index) => ({
      ...item,
      date: item.date.split("/"),
    }));
    return newData;
  },
});
