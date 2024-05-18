var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var found = false;

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
        console.log(numbers[i]);
        found = true;
    }
}

if (!found) {
    console.log("Not Found");
}
