// Bubble sort

let arr = [5, 7, 2, 4, 9, 8, 1, 3, 6, 0];

for(let i=arr.length; i>0; i--){

    for(let j=0; j<i; j++){
        if(arr[j-1]>arr[j]){
            let temp = arr[j];

            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }

        console.log(arr);
    }

}