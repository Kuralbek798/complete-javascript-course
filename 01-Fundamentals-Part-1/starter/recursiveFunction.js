function recursiveFunction(value,counter){         
    if(counter > 1){
        counter--;       
        console.log(value *= counter);  
        recursiveFunction(value,counter);      
    }    
}
recursiveFunction(5,5);

var x = 10;
function bar (funArg){
    var x = 30;
    funArg();
}
function foo(){
    console.log(x);
}
foo.x = 20;
bar.x = 40;
bar(foo);


