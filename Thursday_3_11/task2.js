let
 operation =prompt("Enter the operation :");

 x =prompt("Enter the first number :");

 y =prompt("Enter the second number :");


 if ( operation == '*'){
    alert(Number(x)*Number(y));
    console.log(Number(x)*Number(y));
    document.getElementById("demo").innerHTML = x + operation + y ; 
}
else if( operation == '/'){
    alert(Number(x)/Number(y));
    console.log(Number(x)*Number(y));
    document.getElementById("demo").innerHTML = x + operation + y ;
}
else if( operation == '-'){
    alert(Number(x)-Number(y));
    console.log(Number(x)*Number(y));
    document.getElementById("demo").innerHTML = x + operation + y ;
}
else if( operation == '+'){
    alert(Number(x)+Number(y));
    console.log(Number(x)*Number(y));
    document.getElementById("demo").innerHTML = x + operation + y ;
}