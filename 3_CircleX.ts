

class Circle
{
   Radius:number;
   PI:number=3.14;
   number3:number;

   constructor(value:number)
   {
      this.Radius=value;
      
   }
   
   Area():number 
   { 
      this.number3=this.PI*this.Radius*this.Radius
      return this.number3;
   }


}

class CircleX extends Circle
{

   constructor(value:number) {
      super(value);

         
   }

   Circumference():number
   {
      return (2*this.PI*this.Radius);

   }


}

var obj1= new Circle(20);
 console.log(obj1.Area()) ;

 var obj2= new CircleX(20);
 console.log(obj2.Circumference());




