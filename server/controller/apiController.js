
const addition = (num1, num2)=> {
    let carry = 0,
      sum = 0,
      carryString = "_",
      sumString = "";
  
    let res = [];
  
    for (let i = 0; i < num1.length || i < num2.length; i++) {

        

        let n1,n2 

        if(num1[num1.length-1-i]) n1 = Number(num1[num1.length - 1 - i]) 
        else n1 = 0

        if(num2[num2.length-1-i]) n2 = Number(num2[num2.length - 1 - i]) 
        else n2 = 0
  
      sum = n1 + n2 + carry;
      carry = Math.floor(sum / 10);
      sum = sum % 10;
  
      carryString = carry + carryString;
      sumString = sum + sumString;
  
      res.push({
        
        carryString,
        sumString
      });
    }
  
    if (carry) {
      sumString = carry + sumString;
      res.push({  
        carryString,
        sumString
      });
    }
  
    return res;
  }
  
 

  
   

  
 

const getAddition = (req,res)=>{
    
    console.log('first')

    let num1 = req.body.numberOne
    let num2 = req.body.numberTwo

    let result = addition(num1,num2)
   
    if(result.length===0) res.status(400).json({message:'Bad Request'})

    res.status(200).json(result)
 

}




module.exports  = {
    getAddition
}