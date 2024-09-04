// Сортировка выбором

const array = [
    5, -10, 3, 7, 0, 22, -14, 8, 15, -9, 3, -2, 11, -6, 1, 19, -11, 4, 13, -7,
    6, -1, 17, -12, 2, 16, -10, 5, 14, -8, 9, -4, 12, 18, 20, 21, 23, 24, 25,
    26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

let count = 0;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j;
            }

            count += 1;
        }

        let tmp = arr[i];
        arr[i] = arr[indexMin];
        arr[indexMin] = tmp;
    }

    return arr;
}

console.log(selectionSort(array));
console.log("array.length", array.length); // длинна массива
console.log("count=", count); // количество операций
