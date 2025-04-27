function multiply(a,b){
    return a*b;
}

function multiplyUsingApply(a,b){
    return multiply.apply(this,arguments);
}

console.log(multiplyUsingApply(2,3)); // 6 