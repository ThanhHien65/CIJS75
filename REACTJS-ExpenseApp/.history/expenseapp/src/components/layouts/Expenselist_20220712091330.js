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
        getDate.forEach((item,i)=>{

        })
      });
    });
    return result;
  },
});
