import { atom, selector } from "recoil";
export const ExpenseList = atom({
  key: "Expense",
  default: [],
});
export const Splitdate = selector({
  key: "Splitdate",
  get: ({get}) => get(ExpenseList)
  set: ({ set,get },newvalue) => {
    const getdate = get(ExpenseList);
    set(ExpenseList,
    const createArray = getdate.map((item) => item.date);
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
    const newData = getdate.map((item, index) => ({
      ...item,
      date: result[index],
    }));
    return newData;
    )
  },
});
