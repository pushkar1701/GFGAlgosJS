function powerOfNumber(num, p) {
    let pow = 1;
    let isPow = false;
    while(pow <= num) {
        pow = pow*p;
        if(pow === num) {
            isPow = true;
        }
    }
    return isPow;
}