// let max = -Infinity;
// for(let i=0;i<Array.length;i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }

// let max2 = -Infinity;
// for(let i=0;i<arr.length;i++){
//     if(max2<arr[i]&&arr[i]!=max){
//         max2 = arr[i];
//     }
// }

// let ansarr = [-1];
// let stack = [arr[arr.length-1]];

// for(let i=arr.length-1;i>=0;i-- ){
//         let flag = true;
//         for(let j=0;j<stack.length;j++){
//             if(stack[j]>arr[i]){
//                 ansarr.shift(stack[j]);
//                 flag = false;
//             }


//         }

//         if(flag){
//             stack = [];
//         }
// }


// Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
let max = -Infinity; // 3
let j = -1; / 2
for(let i=0;i<k;i++){
    if(max<arr[i]){
        max = arr[i];
        j = i;
    }
}

for(let i = k; i<arr.length;i++){
    if(j>i-k && max>arr[i]){
        continue;
    }
    else if(j<=i-k){
        // ckeckMax(j,)
    }
    
}