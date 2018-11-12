function secondMinimun(arr) {
    let min = 0,
    secondmin = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1]) {
            min = arr[i];
        }
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < arr[i+1] && arr[i] > min ) {
            secondmin = arr[i];
        }
    }
    return secondmin;
}