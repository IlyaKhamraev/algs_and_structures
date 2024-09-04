// Быстрая сортировка

const array = [
    5, -10, 3, 7, 0, 22, -14, 8, 15, -9, 3, -2, 11, -6, 1, 19, -11, 4, 13, -7,
    6, -1, 17, -12, 2, 16, -10, 5, 14, -8, 9, -4, 12, 18, 20, 21, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

let count = 0;

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < arr.length; i++) {
        count += 1;

        if (i === pivotIndex) continue;

        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array));
console.log("array.length", array.length); // длинна массива
console.log("count=", count); // количество операций
