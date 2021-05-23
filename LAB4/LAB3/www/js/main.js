console.log("Hello world");
// alert("Thepnarin")

var name = "Thepnarin"; //string
let Age = 21; //int

console.log("My name is" + name);
      //0 1 2
name = [5,6,7];
name[0] = 10;
name[2] = "Bake";

document.getElementById("content").innerHTML = name;

//{"key":"value"}
//user{{"name":"bake"},{"name":"pleum"}}
var users = '{"name":"Bake","name":"pleum"}';
var json = JSON.parse(users);
console.log(json);

emp = {name:"AA",name:"BB",name:"CC"};
console.log(emp);
console.log(emp.name);

if(name[0] != 5){
    console.log("True");
}else{
    console.log("False, name is 5");
}

for(i =1; i<5 ; i++){
    console.log(i);
}

console.log(Add(5,3));
function Add(A,B) {
    c =A + B;
    return c;
}