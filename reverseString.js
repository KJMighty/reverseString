export function reverseString(str){
    //Split the string into substrings then into an array
    let splitString = str.split('');
    //Reverse the order of the array
    let reverseString = splitString.reverse();
    //join the substrings in the array together
    let joinArray = reverseString.join('');
    //Return string
    return joinArray;

}

