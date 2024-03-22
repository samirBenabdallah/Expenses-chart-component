const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
//todo day name = diagram
//todo pricd = range
const diagram = Array.from(document.querySelectorAll(".diagram > div"));
diagram.forEach((ele, index) => {
  ele.setAttribute("day-name", data[index].day);
  const range = ele.children[0];
  range.setAttribute("amount", data[index].amount);
  range.style.cssText = `height: ${data[index].amount}%;`;
});
