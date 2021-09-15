const pi = 3.14;
function areaOfCircle(radius)
{
    
    var areaOfCircle = pi * (radius*radius);
    alert("Result = " +  areaOfCircle);
    return areaOfCircle;
};
function circumferenceOfCircle(radius)
{
    var circumferenceOfCircle = 2 * pi * radius;
    alert("Result = " +  circumferenceOfCircle);
    return circumferenceOfCircle;
}

alert("Find Area of Circle : 1" + "Find circumference : 2");
var r = window.prompt("enter radius : ");
var choice = window.prompt("choice");
if(choice == 1)
{
    areaOfCircle(r);
}
else if(choice == 2)
{
    circumferenceOfCircle(r);
}
else{
    console.error("Error");
}