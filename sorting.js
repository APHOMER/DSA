const x = [0,3,4,31];
const y = [4,6,30];

const mergerSort = (arr1, arr2) => {
    const box = [];
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    let i = 1;
    let j = 1;

    if(arr1.length = 0) return arr2;

    if(arr2.length = 0)  return arr1;

    while(arr1Item || arr2Item) {
        if(!arr2Item || arr1Item < arr2Item) {
            box.push(arr1Item)
            i++;
        } else {
            box.push(arr2Item)
            j++;
        }
    }

    console.log(box);
    return box;
}

console.log(mergerSort(x,y));



// const mergerSort = (arr1, arr2) => {
//     const box = [];
    
//     let a = arr1.length -1, b = arr2.length -1;

//     while(arr1.length || arr2.length) {
//         if(arr1[a] < arr2[b]) {
//             box.push(arr1[a]);
//         }
//         box.push(arr2[b]);
//     }

    

//     return box.sort();
// }



