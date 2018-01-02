arr = [1, 7, 10, 24, 31, 33, 45, 59, 63, 76, 90];
x = 33;
function binarySearch(arr, x) {
    let mid;
	let isFound;
    while(arr.length > 1) {
        if(arr.length%2 !== 0) {
            mid = arr[(arr.length-1)/2]
        } else {
            mid = arr[(arr.length)/2];
        }
        isFound = mid === x ? true : false;
        if(isFound) {
            return true;
        } else if(mid > x){
            arr = arr.splice(0, arr.indexOf(mid));
        } else {
            arr = arr.splice(arr.indexOf(mid), arr.length);
        }
    }
	if(!isFound) {
		console.log('not found');
    }
}