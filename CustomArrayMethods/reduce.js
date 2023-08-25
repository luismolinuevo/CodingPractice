//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

Array.prototype.luisReduce = function(callback, init) {
    let acc = init;

    for(let element of this) {
        acc = callback(acc, element);
    }

    return acc;
}

function callBack(acc , element) {
    return acc + element;
}

console.log([1,2,3,4].luisReduce(callBack, 1));