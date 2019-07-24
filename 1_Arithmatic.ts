

class Arithmatic
{
   number1:number;
   number2:number;
   number3:number;

   constructor(value:number,value1:number)
   {
      this.number1=value;
      this.number2=value1; 
   }
   Subs():number 
   { 
      this.number3=this.number1-this.number2;
      return this.number3;
   }
   Div():number 
   { 
      this.number3=this.number1/this.number2;
      return this.number3;
   }
   Multi():number 
   { 
      this.number3=this.number1*this.number2;
      return this.number3;
   }
   Add():number 
   { 
      this.number3=this.number1+this.number2;
      return this.number3;
   }

}

var obj1= new Arithmatic(20,10);
 console.log(obj1.Add()) ;
 console.log(obj1.Multi()) ;
 console.log(obj1.Div()) ;
 console.log(obj1.Subs()) ;



