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
    const key = createArray[0].split("/");
    const 
    return key, values;
  },
});
