//Function to understand is the number Palindrome or no. If yes - return true.
function  isPalindrome (number) {
    if (typeof number === 'number') {
        var numberAsString = String(number),
            i;
        if (numberAsString.length === 1) {
            return true;
        } else {
            for (i = 0; i < numberAsString.length / 2; i++) {
                if (numberAsString.charAt(i) !== numberAsString.charAt(numberAsString.length - 1 - i)) {
                    return false;
                }
            }
            return true;
        }
    } else {
        return false;
    }
}
