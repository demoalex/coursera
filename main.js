fs = require('fs')

/**
 * Algorithms: Design and Analysis, Part 1
 * https://class.coursera.org/algo-007/lecture/2
 * @param {[type]} A [description]
 */
var mergeSort = function(A){
    if(typeof A !== "array" && typeof A !== "object") return "wrong input";

    if(A.length < 2) return A;

    var d = (A.length/2).toFixed(), L = mergeSort(A.slice(0,d)), R = mergeSort(A.slice(d,A.length));


    for(var i=0,j=0,k=0; k<A.length;k++){
        if (j >= R.length || L[i] < R[j]) {
            A[k] = L[i];
            i++;
        } else if(i >= L.length || L[i] >= R[j]){
            A[k] = R[j];
            j++;
        }
    }
    return A;
}

// console.log(mergeSort([1,3,5,2,4,6]));
// console.log(mergeSort([8,7,6,5,4,3,2,1]));
// console.log(mergeSort([2,1,1]));
// console.log(mergeSort([1,0]));
// console.log(mergeSort([1]));
// console.log(mergeSort([]));
// console.log(mergeSort([9,3,1,4,3,29,39,4,2,3,67,4,6,2,58,43,64,53,45]));

/**
 * Algorithms: Design and Analysis, Part 1
 * https://class.coursera.org/algo-007/lecture/16
 * @param {[type]} A [description]
 */
var countInversions = function(A){
    if(typeof A !== "array" && typeof A !== "object") return "wrong input";

    if(A.length < 2) return { arr: A, inv: 0};

    var d = (A.length/2).toFixed(), L = countInversions(A.slice(0,d)), R = countInversions(A.slice(d,A.length)),
        inv = L.inv+R.inv;


    for(var i=0,j=0,k=0; k<A.length;k++){
        if (j >= R.arr.length || L.arr[i] <= R.arr[j]) {
            A[k] = L.arr[i];
            i++;
        } else if(i >= L.arr.length || L.arr[i] > R.arr[j]){
            A[k] = R.arr[j];
            inv += L.arr.length - i;
            j++;
        }
    }

    return { arr: A, inv: inv};
}

// console.log(countInversions([1,3,5,2,4,6]));
// console.log(countInversions([8,7,6,5,4,3,2,1]));
// console.log(countInversions([2,1,1]));
// console.log(countInversions([1,0]));
// console.log(countInversions([1]));
// console.log(countInversions([]));
// console.log(countInversions([9,3,1,4,3,29,39,4,2,3,67,4,6,2,58,43,64,53,45]));

//////////////////////////////////////
// Homework Programming Question-1  //
//////////////////////////////////////
// var f = function(val) {
//     return parseInt(val, 10);
// }
// var input1 = fs.readFileSync(__dirname + '/IntegerArray.txt', 'utf8').toString().split("\r\n").map(f);
// input1.pop();
// console.log(input1.length);
// console.log(countInversions(input1).inv);

/**
 * Algorithms: Design and Analysis, Part 1
 * Strassen's Subcubic Matrix Multiplication Algorithm
 * https://class.coursera.org/algo-007/lecture/19
 * @param {[type]} arguments [description]
 */
function strassenMatrix() {

}
