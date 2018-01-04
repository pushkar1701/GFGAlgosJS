let num = 15;
function consecutiveSum(num) {
    let count = 0;
    for(let i=0; i*(i+1) < 2 * num; i++ ) {
        let a = (num - (i*(i+1))/2)/(i+1);
        if(a - Math.ceil(a) === 0) {
            count++;
        }
    }
    return count;
}