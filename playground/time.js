var moment = require('moment');

// Jan 1st 1970 00:00:00 am Unix epic

// var date = new Date();
// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'years').subtract(3, 'months');

var createdAt = moment().valueOf();
console.log(createdAt);
var date = moment(createdAt);
console.log(date.format('h:mm a'));
