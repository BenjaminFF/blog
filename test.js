console.log([] + []);  //''
console.log([] + {});  //[object Object]
console.log(typeof {}.valueOf());   //object
console.log(typeof {}.toString());  //string
console.log({}.toString());   //[object Object]
console.log({} + {});   //[object Object][object Object]

console.log(+{});     //NaN
console.log(Number("[object Object]"));     //NaN
