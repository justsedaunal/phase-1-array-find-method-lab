// code your solution here
const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
  //...
];
function superbowlWin(record) {
  if (record === undefined) {
    return "undefined value";
  }
  return record.result === "W";
}
console.log(record.find(superbowlWin));
