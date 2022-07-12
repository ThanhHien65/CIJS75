import { atom, selector } from "recoil";
export const ExpenseList = atom({
  key: "Expense",
  default: [],
});
export const Splitdate = selector({
  key: "Splitdate",
  get: ({ get }) => {
    const getDate = get(ExpenseList);
    const createArray = getDate.map((item) => item.Date);
    const createArrayyy = getDate.map((item) => item);
    const values = ["day", "month", "year"];
    const pusharr = [];
    createArray.forEach((item, index) => {
      pusharr.push(item.split("/"));
    });
    let object = {};
    const result = [];
    pusharr.forEach((key, index) => {
      values.forEach((i, v) => {
        object[i] = key[v];
      });
      result.push(object);
    });
    createArrayyy.forEach((item, index) => {
      item.date = result[index];
    });
    return createArrayyy;
  },
});
