import { atom, selector } from "recoil";
import moment from 'moment'
export const ExpenseList = atom({
  key: "Expense",
  default: [],
});
export const Splitdate = selector({
  key: "Splitdate",
  get: ({ get }) => {
    const getdate = get(ExpenseList);
    const values = ["month","day","year"];
    const newData = getdate.map((item, index) => ({
      ...item,
      date: moment(item.date).format('MMMM-DD-YYYY')
        .split("-")
        .reduce((a, v, i) => ({ ...a, [values[i]]: v }), {}),
    }));
    return newData;
  },
});
