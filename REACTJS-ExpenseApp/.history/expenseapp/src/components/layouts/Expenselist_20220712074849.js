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
    const keys = [];
    const keyset = keys[0];
    const keyss = [];
    const aaaa= 
    for (const item of keys) {
      keyss.push(item.split("/"));
    }
    // var obj = {};
    // for(var i = 0; i < keys.length; i++){
    //     obj[keys[i]] = values[i];
    // }
    return keyss;
  },
});
