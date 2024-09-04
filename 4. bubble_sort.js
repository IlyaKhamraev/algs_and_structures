// Пузырьковая сортировка

const array = [
    4, 0, 1, 11, 2, 17, -4, 3, 8, 20, 5, 18, 6, 12, 7, -2, 9, 10, 15, 14, 16,
];
let count = 0;

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }

            count += 1;
        }
    }

    return arr;
}

console.log(bubbleSort(array));
console.log("array.length", array.length); // длинна массива
console.log("count=", count); // количество операций
