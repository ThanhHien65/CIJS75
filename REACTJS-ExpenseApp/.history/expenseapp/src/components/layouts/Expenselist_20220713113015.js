import { atom, selector } from "recoil";
import moment from "moment";
export const ExpenseList = atom({
  key: "Expense",
  default: [],
});
export const EpanseData = selector({
  key: "Splitdate",
  get: ({ get }) => {
    const getdate = get(ExpenseList);
    const values = ["month", "day", "year"];
    const newData = getdate.map((item, index) => ({
      ...item,
      date: moment(item.date)
        .format("MMMM-DD-YYYY")
        .split("-")
        .reduce((a, v, i) => ({ ...a, [values[i]]: v }), {}),
    }));
    return newData;
  },
});
export const ExpanseDate = selector({
  key:'fillchart',
  get: ()
})
// const getvalue = () => {
//   console.log(GetExpanselist);
//   const creaobj = [];
//   var object = informationMonth.forEach((item, index) => {
//     creaobj.push({ month: item, chart: 0 });
//   });
//   const search = GetExpanselist.filter((item) => {
//     informationMonth.forEach((itemdate, index) => {
//       if (item.date["month"].substring(0, 3) === itemdate) {
//         const result = (creaobj[index].chart = creaobj[index].chart + 10);
//       }
//     });
//   });
//   console.log(creaobj);
// };
