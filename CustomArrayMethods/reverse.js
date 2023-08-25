Array.prototype.luisReverse = function() {

    for(let i = 0; i < this.length / 2; i++) {
        let indexToSwap = this.length - 1 - i;
        let tempValue = this[i];

        this[i] = this[indexToSwap];
        this[indexToSwap] = tempValue;
    }
}

["bob", "luis", "fdfs", "mike"]