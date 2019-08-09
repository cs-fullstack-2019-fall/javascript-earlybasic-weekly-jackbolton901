//index.js
q= false
var opt1 = prompt("Enter 1 to count, 2 for calculator, or q to quit.");
if(opt1 === 1)
{
var num =1;
var opt2 = parseInt(prompt("To count by 1s, enter the number you want to count to."));
while(num <= opt2)
  {
	console.log(num);
	num++;
  } 
}
	var a=prompt("Press a to add");
	if (a ==="a")
	{
		var num1= parseInt(prompt("Enter number."));
		var num2= parseInt(prompt("Enter number."));
		alert(num1 + num2);
    }

         var yes= prompt("Would you like to count by 2s? If so, type yes.");
          if( yes === "yes"){
 	     var twos= parseInt(prompt("enter number."))
 	     while(num<= twos){
 	 	 console.log(num);
 		num=(num +2);
        }
    }