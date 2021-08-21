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
    console.log(numberOfOdds);
}

/* Functions for question 3 */

function swap(array, i, j){
    const aux = array[i];

    array[i] = array[j];
    array[j] = aux;
}

function partion(array, startIndex, endIndex){
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
        let breakPoint = partion(array, startIndex, endIndex);
        quickSort(array, startIndex, breakPoint);
        quickSort(array, breakPoint + 1, endIndex);
    }
}

function applyQuickSort(){
    quickSort(array, 0, array.length-1);

    console.log({quick_sort: array});
}

helloButton.addEventListener('click', clickHelloButton); // Question 1
counterOddsButton.addEventListener('click', countOddsNumbersFromArray); // Question 2
quickSortButton.addEventListener('click', applyQuickSort); // Question 3


/* 
5 - Crie desenhos diretamente em um elemento <canvas> de uma página HTML, em tempo de
execução, utilizando JavaScript.
*/