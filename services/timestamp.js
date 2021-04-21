const time = require("../mood/services/timestamp");

let getDate = new Date();

let currentDate = ("0" + getDate.getDate()).slice(-2);

let month = ("0" + (getDate.getMonth() + 1)).slice(-2);

let year = getDate.getFullYear();

let hours = getDate.getHours();

let minutes = getDate.getMinutes();

let seconds = getDate.getsSeconds();

let timestamp = year.getFullYear + month.getMonth + date.getDate + hours.getHours + minutes.getMinutes
+ seconds.getsSeconds; 

console.log(timestamp);


