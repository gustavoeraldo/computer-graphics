'use strict';

class Vector {
    constructor (x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getModule(){
        this.module = Math.sqrt(this.x**2 + this.y**2 + this.z**2); 
        return this.module;
    }
};

class Matrix {
    constructor (v1, v2, v3){
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }

    calculateMatrixDeterminant(){
        this.determinant = (
            this.v1.x * this.v2.y * this.v3.z + 
            this.v1.y * this.v2.z * this.v3.x + 
            this.v1.z * this.v2.x * this.v3.y
        ) - (
            this.v1.z * this.v2.y * this.v3.x + 
            this.v1.x * this.v2.z * this.v3.y + 
            this.v1.y * this.v2.x * this.v3.z
        );

        return this.determinant;
    }

    transposeMatrix(){
        const aux_y = this.v1.y; 
        const aux_z = this.v1.z;

        this.v1.y = this.v2.x;
        this.v1.z = this.v3.x;

        this.v2.x = aux_y;
        const aux_v2_z = this.v2.z; 
        this.v2.z = this.v3.y;

        this.v3.x = aux_z;
        this.v3.y = aux_v2_z;
        
        console.log(this.v1, this.v2, this.v3);

        return;
    }

};

function calculateCrossProduct(v1, v2){ // Produto Vetorial
    const new_x = v1.y*v2.z - v1.z*v2.y;
    const new_y = v1.z*v2.x - v1.x*v2.z;
    const new_z = v1.x*v2.y - v1.y*v2.x;

    const crossProduct = new Vector(new_x, new_y, new_z);
    return crossProduct;
}

function calculateDotProduct(vector1, vector2){ // Produto escalar
    return (vector1.x * vector2.x) + (vector1.y * vector2.y) + (vector1.z * vector2.z);
}

function calculateCrossVectorMatrix(vector, matrix){ // Vector[1:3] x Matriz[3:3]
    matrix.transposeMatrix();

    console.log(matrix.v1);
    const x1_component = calculateDotProduct(vector, matrix.v1);
    const x2_component = calculateDotProduct(vector, matrix.v2);
    const x3_component = calculateDotProduct(vector, matrix.v3);

    const productResult = new Vector (x1_component, x2_component, x3_component);
    console.log({productResult});
    return productResult;
}

function calculateCrossMatrixProduct(matrix1, matrix2){ // Matriz[3:3] x Matriz[3:3]
    matrix2.transposeMatrix(); // transposing the matrix to reuse calculateDotProduct() function

    const a11 = calculateDotProduct(matrix1.v1, matrix2.v1);
    const a12 = calculateDotProduct(matrix1.v1, matrix2.v2);
    const a13 = calculateDotProduct(matrix1.v1, matrix2.v3);
    const v1 = new Vector(a11, a12, a13);

    const a21 = calculateDotProduct(matrix1.v2, matrix2.v1);
    const a22 = calculateDotProduct(matrix1.v2, matrix2.v2);
    const a23 = calculateDotProduct(matrix1.v2, matrix2.v3);
    const v2 = new Vector(a21, a22, a23);

    const a31 = calculateDotProduct(matrix1.v3, matrix2.v1);
    const a32 = calculateDotProduct(matrix1.v3, matrix2.v2);
    const a33 = calculateDotProduct(matrix1.v3, matrix2.v3);
    const v3 = new Vector(a31, a32, a33);
    
    const productResult = new Matrix(v1, v2, v3); 
    return productResult;
}

const vector1 = new Vector(1, 2, 3);
const vector2 = new Vector(5, 4, 8);
const vector3 = new Vector(2, 4, 3);

const vector4 = new Vector(3, 8, 5);
const vector5 = new Vector(5, 1, 6);
const vector6 = new Vector(3, 7, 2);

// const crossProductResult = calculateCrossProduct(vector1, vector2);
// console.log(crossProductResult);

const matrix1 = new Matrix(vector1, vector2, vector3);
const matrix2 = new Matrix(vector4, vector5, vector6);

matrix1.calculateMatrixDeterminant();
console.log(matrix1);

const vectorTest = new Vector(1, 2, 3);
// const matrixResult = calculateCrossMatrixProduct(matrix1, matrix2);
const matrixResult2 = calculateCrossVectorMatrix(vectorTest, matrix1);
