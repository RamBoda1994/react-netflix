const moment = require('moment');

const input1 = "2019-02-01T04:40:21.331Z";

const input2 = "2018-01-12T05:09:33.028Z";

const input3 = "June 21, 2013";

// const m = moment(input2);

// const n = moment(input3);


//console.log(n.format('LL'));

console.log(new Date(input1).toISOString().slice(0, 10));
