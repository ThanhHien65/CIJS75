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
    const createArrayyy = getdate.map((item) => item);
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
    const pushed = []
    createArrayyy.forEach((item, index) => {
      createArrayyy[index].date = result[index];
    });
    return result;
  },
});
