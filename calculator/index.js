// console.log("hello");
const add = (a, b) => {
    return (a+b)
}
const sub = (a, b) => {
    return (a-b)
}  

const multiply = (a, b) => {
    return (a*b)
}
const divide=(a,b)=>{
    return (a/b)
}
const calculator_utils={
    add,sub,multiply,divide
}

module.exports= { calculator_utils};