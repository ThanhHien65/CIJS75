import { atom, selector } from "recoil";
export const ExpenseList = atom({
  key: "Expense",
  default: [],
});
export const Splitdate = selector({
  key: "Splitdate",
  get: ({ get }) => {
   const getde= get(ExpenseList);
    // const getdate = get(ExpenseList);
    // const createArray = getdate.map((item) => item.date);
    // const values = ["day", "month", "year"];
    // const pusharr = [];
    // createArray.forEach((item, index) => {
    //   pusharr.push(item.split("/"));
    // });
    // let object = {};
    // const result = [];
    // pusharr.forEach((key, index) => {
    //   values.forEach((i, v) => {
    //     object[i] = key[v];
    //   });
    //   result.push(object);
    // });
    // return result;
  },
  set: ({ set }, newValue) => {
    const getdate = get(ExpenseList);
    const createArray = getdate.map((item) => item.date);
    return createArray;
  },
});
