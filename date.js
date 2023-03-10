exports.getDate= function getDate() {
  const  today = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const day = today.toLocaleDateString("en-US", options);
  return day;
}

exports.getDay = function getDay() {
    const today = new Date();
    const options = { weekday: "long" };
    const day = today.toLocaleDateString("en-US", options);
    return day;
  }
  console.log(module.exports);







//   module.exports.getDate= getDate;
// function getDate() {
//   var today = new Date();
//   var options = { weekday: "long", month: "long", day: "numeric" };
//   var day = today.toLocaleDateString("en-US", options);
//   return day;
// }

// module.exports.getDay = getDay;
// function getDay() {
//     var today = new Date();
//     var options = { weekday: "long" };
//     var day = today.toLocaleDateString("en-US", options);
//     return day;
//   }
//   console.log(module.exports);