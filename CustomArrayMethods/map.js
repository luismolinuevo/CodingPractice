//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Array.prototype.luisMap = function(callback) {
    let mappedArray = [];

    for(let element of this) {
        mappedArray.push(callback(element))
    }

    return mappedArray;
}

function callBack(element) {
    const newElement = element * 3;
    return newElement;
}

console.log([1,3,4,5,6].luisMap(callBack))
