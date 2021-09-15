function check(num1, num2) {
    //condition
    if (num1 || num2 == 50) {
        alert("TRUE");    }
    else if (num1 + num2 == 50) {
        alert("TRUE");
       
    }
    else {
        alert("FALSE");
    }
}
var num1 = window.prompt("enter number 1 : ");
var num2 = window.prompt("enter number 2 : ");
check(num1, num2);
