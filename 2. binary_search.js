// Бинарный поиск

// Бинарный поиск основан на идее деления данных на половины и последующем поиске в одной из них с последующим делением.
// Oн работает только с отсортированными массивами, поэтому может потребоваться некоторая
// предварительная обработка наших данных для их сортировки.

const array = [
    -14, -12, -11, -10, -10, -9, -8, -7, -6, -4, -2, -1, 0, 1, 2, 3, 3, 4, 5, 5,
    6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];

let count1 = 0;

function binarySearch(arr, item) {
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        count1 += 1;

        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item) {
            found = true;
            position = middle;
            return position;
        }
        if (item < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return position;
}

console.log(binarySearch(array, 14));
console.log("count=", count1); // количество операций

let count2 = 0;

// Бинарный поиск с помощью рекрусии

function recursiveBinarySearch(arr, item, start, end) {
    let middle = Math.floor((start + end) / 2);
    count2 += 1;

    if (item === arr[middle]) {
        return middle;
    }

    if (item < arr[middle]) {
        return recursiveBinarySearch(arr, item, start, middle - 1);
    } else {
        return recursiveBinarySearch(arr, item, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(array, 14, 0, array.length));
console.log("count=", count2); // количество операций
