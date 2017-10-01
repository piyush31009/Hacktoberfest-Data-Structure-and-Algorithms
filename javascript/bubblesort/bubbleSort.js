function bubbleSort(array) {
    var len = array.length;
    var temp;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

module.exports = bubbleSort;