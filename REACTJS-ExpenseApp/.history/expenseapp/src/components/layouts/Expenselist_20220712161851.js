import { atom, selector } from "recoil";
export const ExpenseList = atom({
  key: "Expense",
  default: [],
});
export const Splitdate = selector({
  key: "Splitdate",
  get: ({ get }) => {
    const getdate = get(ExpenseList);
    const createArray = getdate.map((item) => item.date);
    const values = ["day", "month", "year"];
    const newData = getdate.map((item, index) => ({
      ...item,
      date: item.date
        .split("/")
        .reduce((a, v, i) => ({ ...a, [values[i]:[v] }), {}),
    }));
    return newData;
  },
});
