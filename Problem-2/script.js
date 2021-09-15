function revString(s) {
    var splitting_string = s.split(""); 
    var rev_string = splitting_string.reverse();
    
    var join_string = rev_string.join("");
    console.log("The reversed one : " + join_string);
    console.log("The original one : " + s);
    return s;
}
var word = window.prompt("Enter a word :");
revString(word);