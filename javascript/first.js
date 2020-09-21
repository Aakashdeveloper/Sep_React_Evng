//es5
//es6  > Ecma script

//es5
function sayhi(){
    var a = ["HI to All","gg"]
    return a
}

//es6
const sayhi = () => { return "Hi To All"}

var a = ["hi","Bie","Hello","Hey"]

a.map((data) => { return data})

filter

var a = [20,34,25,36,45,21,34]
a.filter((data) => {return data>25})

var a = [20,34,25,36,45,21,34]
undefined
a.indexOf(36)
3
a.indexOf(44)
-1
a.indexOf(45)
4
a.indexOf(20)
0
a.indexOf(22)
-1

var a = ["hi","Bie","Hello","Hey"]
a.indexOf("hi")
0
a.indexOf('hii')
-1