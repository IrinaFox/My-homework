//Get needed element of Fibo range
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

//Get Fibo rande from "start" to "end"
function fiboCounter (start, end) {
    if (start > end) {
        return 0;
    } else {
        var fiboElements = 0,
            i=0;

        while (getFiboElement(i) <= end) {
            if (getFiboElement(i) >= start) {
                fiboElements++;
            }
            i++
        }
        return fiboElements;
    }
}