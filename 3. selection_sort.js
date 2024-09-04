// Сортировка выбором

const array = [
    4, 0, 1, 11, 2, 17, -4, 3, 8, 20, 5, 18, 6, 12, 7, -2, 9, 10, 15, 14, 16,
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
