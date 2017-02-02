//Get first needed element of Fibo range
function getFiboElement (start) {
    if (start === 0) {
        return start;
    } else if (start === 1) {
        return start;
    } else if (start === 2) {
        return 1;
    } else {
        return getFiboElement(start - 1) + getFiboElement(start - 2);
    }
}

//This function returns Fibo elements with desirable length
function fiboEvaluator (n) {
    var fiboElements = 0,
        i = 1;

    while (String(getFiboElement(i)).length <= n) {
        if (String(getFiboElement(i)).length === n) {
            fiboElements++;
        }
        i++;
    }
    return fiboElements;
}