//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//Best used when you have to return a single value

Array.prototype.luisFilter = function (callback) {
    let filterArray = []
    for(let element of this) {
        if(callback(element)) {
            filterArray.push(element);
        }
    }

    return filterArray;
}

function callBack(element) {
    if(element > 3) {
        return true;
    }

    return false;
}

console.log([3,2,5,6,1,1].luisFilter(callBack))