//Cit281 Project 6
//Benjamin Wright

class Shape {
    constructor(sides){
     sides = [];  
        
    }
perimeterCalc =  (side, summedLength) => side + summedLength;
perimeter() {
    let perim = 0;
    for (let i = 0; i < sides.length; i++) {
        perim = perim + sides[i]
        
    }
    console.log(perim)
} 
}
/*
console.log("test")

console.log(new Shape([5, 10]).perimeter(sides=[5,10]));  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter(sides = [1, 2, 3, 4, 5])); // 15
console.log(new Shape().perimeter(sides = [])); // 0
*/

class Rectangle extends Shape {
    constructor(length, width, args ){
        super(args);
        this.length = length;
        this.width = width;
    }
    perimeter2() {
        let perim = 0;
        for (let i = 0; i < sides.length; i++) {
            perim = perim + sides[i];
            
        }
        perim = perim * 2;
        console.log(perim)
    } 
    area() {
        let theArea = 1;
        for (let i = 0; i < sides.length; i++) {
            theArea = theArea * sides[i];
            
        }
        console.log(theArea)
    }
}
/*console.log(new Rectangle(4, 4).perimeter2([sides =[4, 4]]));  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter2(sides=[5, 5])); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter2(sides = [0])); // 0
console.log(new Rectangle().area()); // 0
*/


class Triangle extends Shape {
    constructor(sideA, sideB, sideC, args){
        super(args);
        this.sideA = sideA;
this.sideB = sideB;
this.sideC = sideC;
//super(args);
    }
area2(sideA, sideB, sideC){
let theS = 0
theS= sideA + sideB + sideC;
theS= theS / 2
theS= Math.sqrt(theS * (theS - sideA)*(theS - sideB)*(theS-sideC))
console.log(theS)
}
//console.log(area2(2,3,4))
}
/*console.log(new Triangle(2,3,4).area2(2,3,4))
console.log(new Triangle(3, 4, 5).perimeter(sides=[3,4,5]));  // 12
console.log(new Triangle(3, 4, 5).area2(3,4,5));  // 6
console.log(new Triangle().perimeter(sides=[])); // 0
console.log(new Triangle().area2()); // 0*/
// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
function finalTest(){
   
console.log(new Rectangle(3, 4).perimeter2([sides =[3, 4]]));  
console.log(new Rectangle(3, 4).area(3,4));  

console.log(new Rectangle(5, 5).perimeter2([sides =[5, 5]])); 
console.log(new Rectangle(5, 5).area(5,5));  
    console.log(new Triangle(3, 4, 5).perimeter(sides=[3,4,5]));  
    console.log(new Triangle(3, 4, 5).area2(3,4,5));
console.log(new Shape(10).perimeter(10))
console.log(new Shape(10).area(010))
console.log(new Shape().perimeter())
console.log(new Shape().area())
   
    /*const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
    for (let i2 = 0; i2< data.length; i2++) {
       
       if (i2 = 0) {
        console.log("Rectangle with sides 3,4 has perimeter of");
        console.log(new Rectangle(3,4).perimeter2(sides=[3,4]));
        console.log("and area of")
            console.log(new Rectangle(3,4).area())
           break
       } else {if (i2 = 1) {
        console.log("Square with sides 5, 5")
        console.log(new Rectangle(5, 5).perimeter2(sides=[5,5]))
        console.log("and area of")
        console.log(new Rectangle(5,5).area())
           break
       } else {if (i2 = 2) {
        console.log("Triange with sides 3, 4, 5")
        console.log(new Triangle(3,4,5).perimeter(sides=[3,4,5]))
        console.log("and area of")
        console.log(new Triangle(3,4,5).area2(3,4,5))
           break
       } else {if (i2=3) {
           if (data[3].length<1) {
               console.log("Shape with 1 side unsupported")
               break
           }
       } else {
           console.log("shape with no sides unsupported")
           break
       }
           
       }
           
       }
           
       }
       
    }*/}
       console.log(finalTest())
       
       
       
       
       
       
       
       
       
        /*if (i2 = 0) {
            console.log("Rectangle with sides 3,4 has perimeter of");
        console.log(new Rectangle(3,4).perimeter(sides=[3,4]));
        console.log("and area of")
            console.log(new Rectangle(3,4).area())
        
        
        } else {if (i2 = 1) {
            console.log("Square with sides 5, 5")
            console.log(new Rectangle(5, 5).perimeter(sides=[5,5]))
            console.log("and area of")
            console.log(new Rectangle(5,5).area())
        }}*/
