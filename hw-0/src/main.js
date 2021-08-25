'use strict';

const helloButton = document.querySelector('#hello-world-btn');
const maxIntInput = document.querySelector('#int-range');
const counterOddsButton = document.getElementById('counter-odds-btn');
const quickSortButton = document.getElementById('quick-sort-btn');

let array = [];

function clickHelloButton(){ 
    alert("Hello World"); }

/* Functions for question 2 */

function generateArrayOfRandomNumbers(){
    const maxInt = 100;
    let numbersArray = [];

    for (let i = 0; i < 10; i ++){
        numbersArray.push(
            Math.floor(maxInt * Math.random() + 1)
        );
    }

    return numbersArray
}


function countOddsNumbersFromArray() {
    array = generateArrayOfRandomNumbers();
    console.log(array);

    const numberOfOdds = array.filter((number) => number % 2 === 0).length;
    // console.log(`Number of Odds in array: ${numberOfOdds}`);
}

/* Functions for question 3 */

function swap(array, i, j){
    const aux = array[i];

    array[i] = array[j];
    array[j] = aux;
}

function partition(array, startIndex, endIndex){
    const pivot = array[startIndex];

    let i = startIndex - 1;
    let j = endIndex + 1;

    while (true){
        do {
            i += 1;
        } while (array[i] < pivot);

        do {
            j -= 1;
        } while (array[j] > pivot);

        if (i >= j ) break;
 
        swap(array, i, j);
    }

    return j;
}

function quickSort(array, startIndex, endIndex){
    if (startIndex < endIndex){
        let breakPoint = partition(array, startIndex, endIndex);
        quickSort(array, startIndex, breakPoint);
        quickSort(array, breakPoint + 1, endIndex);
    }
}

function applyQuickSort(){
    quickSort(array, 0, array.length-1);

    console.log({quick_sort: array});
}

helloButton.addEventListener('click', clickHelloButton); // Related to Question 1
counterOddsButton.addEventListener('click', countOddsNumbersFromArray); // Related to Question 2
quickSortButton.addEventListener('click', applyQuickSort); // Related to Question 3

// Question 5
function draw() {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // external circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye 
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();

    // Testing
    const canvas = document.querySelector('#free-draw');
    const box = canvas.getContext('2d');
    box.fillStyle = 'blue';
    box.fillRect(10, 10, 150, 100);
}
