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

/* Classes for Question 4 */
class Vector {
    constructor (x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getModule(){
        return Math.sqrt(this.x**2 + this.y**2 + this.z**2);
    }
};

class Matrix {
    constructor (v1, v2, v3){
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    calculateCrossProduct(){ // Produto Vetorial
        return 'Cross Product';
    }

    calculateDotProduct(){ // Produto escalar
        return 'Dot product';
    }

    getMatrixDeterminant(){
        return 'matrix determinant';
    }

    transposeMatrix(){
        return 'transpose matrix';
    }

};

function calculateCrossProduct(v1, v2){ // Produto Vetorial
    // a × b = [a2b3 − a3b2, a3b1 − a1b3, a1b2 − a2b1].
    const new_x = v1.y*v2.z;
    const new_y = v1.y*v2.z;
    const new_z = v1.y*v2.z;

    const crossProduct = new Vector(new_x, new_y, new_z);
    return crossProduct;
}

function calculateDotProduct(v1, v2){ // Produto escalar
    return 'Dot product';
}

helloButton.addEventListener('click', clickHelloButton); // Question 1
counterOddsButton.addEventListener('click', countOddsNumbersFromArray); // Question 2
quickSortButton.addEventListener('click', applyQuickSort); // Question 3

/* 4 -
Crie uma pequena biblioteca JavaScript que defina uma classe Vetor, de 3 elementos, e uma
classe Matriz, de dimensões 3x3. Após, implemente funções que realizem as seguintes operações
entre estes vetores e matrizes:
- Norma do vetor.
- Produto vetorial (cross product) entre dois vetores.
- Produto escalar (dot product) entre dois vetores.
- Produto vetor/matriz.
- Produto matriz/matriz.
- Determinante da matriz.
- Transposta da matriz.
*/



/* 
5 - Crie desenhos diretamente em um elemento <canvas> de uma página HTML, em tempo de
execução, utilizando JavaScript.
*/