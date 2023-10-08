/*var x =['shady','hady'];
x.pop()
x.shift()
x.push()
x.unshift()
x.sort()
x.splice()
x.reverse()
x.toString()
x.concat()
x.join()
var mydetails=[

    {name:"shady",
    city:"cairo",
    wife :{
        age:22,
        name:"natlolo",
        job :"housewife"
    }},
   { name:"joseph",
    city:"menya",
    wife :{
        age:55,
        name:"soso",
        job :"general manger"
    }},
   { name:"sherif",
    city:"cairo",
    wife :{
        age:24,
        name:"marina",
        job :"housewife"
    }}
]
console.log(mydetails);
var conatiner=document.getElementById("demo")
var cartona=""
for(var i=0;i<mydetails.length;i++){
cartona+=`
<h3>name:${mydetails[i].name}</h3>
`
}
conatiner.innerHTML=cartona;

function getsalary(salary, bonus){
    var netsalary=salary-(salary*0.1);
    netsalary+=bonus
    console.log(netsalary)
}
getsalary(100,50);

var x=function getsalary(salary, bonus=0){
    var netsalary=salary-(salary*0.1);
    netsalary+=bonus
    console.log(netsalary)
}
x(100,50)

var text="shadyjoseph";
console.log(text.substring(1,7));
console.log(text.substr(1,7));
text.replace("shad","had")
text.replaceAll("shad","had")
*/


//DOM
/*
by claas name=HTMLcollection==array
by id = object
byTag=HTMLcollection
byName in form ==nodelist ==array

document.queryselector(".classname")==element
document.queryselector("#id")==element
document.querySelectorAll("div")==nodeList

onclick   onkeyup 

events
click   dblclick    mousemove   mouseenter  mouseleave    keyup     keydown    
document.Queryselector(#test)
test.addEventListener("click",function(){
})
eventInfo
test.addEventListener("click",function(eventInfo){
})
var shady=document.queryselectorall('div')

for(var i=0;i<shady.length;i++){
    shady[i].addEventListener("click",function(){
        console.log(i)
})
}
*/


//classlist 1-add  2-remove  3-replace
//inline style
// get or set attribute
/*
var shady=document.querySelector('.test');
shady.addEventListener("click",function(){
    if(shady.classList.contains("test")){
        shady.classList.replace("test","test2")
    }else{
        shady.classList.replace("test2","test")
    }
   
})
shady.style.width='100px'

var x=shady.getAttribute('class')
console.log(x)
shady.setAttribute('id','no3')
var y=shady.getAttribute('id');
console.log(y)

var x=document.querySelector('.photo')
document.body.addEventListener('mousemove',function(eventInfo){
x.style.left=eventInfo.clientX+"px"
x.style.top=eventInfo.clientY+"px"
})



//API
var myhttp= new XMLHttpRequest
var getdemo=document.querySelector("#demo")
myhttp.open("GET",`https://jsonplaceholder.typicode.com/posts`)
myhttp.send()
// readtstate 0 1 2 3 4
// readystatechange
var post=[]
myhttp.addEventListener("readystatechange",function(){
    if(myhttp.readyState==4){
       var cartona=''
       post=JSON.parse(myhttp.response)
       for(var i=0;i<post.length;i++){
         cartona+=`
         <h3>${post[i].title}</h3>
         <p>${post[i].body}</p>
         `
       }
       getdemo.innerHTML=cartona
    }
})

//prototypal inhertance

var Instructor={
    Iname:"shady",
    age:22,
    gender:"male"
}
var Student={
    Sname:"youssef",
    age:20,
    gender:"male"
}

Instructor.__proto__=Student
console.log(Instructor)

//prototypal chaining


var Course={
    date:"mars",
    duration:"3 month"
}

Course.__proto__=Instructor
//or
Object.setPrototypeOf(Course,Instructor)
Object.getPrototypeOf(Instructor)

//prototype constructo function

var person=function(name,age,job,gender){
    this.personName=name
    this.personAge=age
    this.personGender=gender
    this.personJob=job;
}
var shady=new person("shady",20,"gahedd","ragel")
console.log(shady)
*/

//ES6

class person{
constructor(name,age,job,gender){
    this.personName=name
    this.personAge=age
    this.personGender=gender
    this.personJob=job;
}
hello(){
console.log("king shady")
}
}

class eng extends person{
    constructor(name,age,job,gender,field,salary){
        super(name,age,job,gender)
        this.fieldName=field
        this.engSalary=salary
    }
}


var shady=new eng("shady",20,"king","ragel","programming",20000000)
shady.hello()
console.log(shady)