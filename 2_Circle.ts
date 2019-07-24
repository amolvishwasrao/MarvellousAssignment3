

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

var obj1= new Circle(20);
 console.log(obj1.Area()) ;




