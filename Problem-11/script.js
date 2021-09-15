/*
11- check whether a given number is positive or negative
*/
function checkNumber(n)
{
    if(n>=0)
    {
        alert("Positive");
    }
    else
    {
        alert("negative");    }
}

var n = window.prompt("Enter number : ");
checkNumber(n);