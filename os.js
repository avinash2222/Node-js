const  os=require('os');
const tm=os.totalmem();
const fm=os.freemem();

console.log("total mem: "+tm);
console.log("free mem: "+fm);
