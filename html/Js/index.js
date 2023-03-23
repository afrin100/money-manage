function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputValue=inputField.value ;
    const inputValueText=parseFloat(inputValue);
    //clear field
    inputField.value='';
  return inputValueText;
}


//get the input value
    document.getElementById("btn-calculate").addEventListener("click",function(){
        const rentInput=document.getElementById("rent-input");
        const rentValue=rentInput.value;
        const rentValueText=parseFloat(rentValue);
    
        const foodInput=document.getElementById("food-input");
        const foodValue=foodInput.value;
        const foodValueText=parseFloat(foodValue);
   
   
        const tutionInput=document.getElementById("tution-input");
        const tutionValue=tutionInput.value;
        const tutionValueText=parseFloat(tutionValue);
   
    //sum the inputValue
     const totalValue=rentValueText+foodValueText+tutionValueText;
    const expenseField=document.getElementById("expense-field");
      const totalExpense=expenseField.value;
      totalExpense=totalValue;
      return totalExpense;
    
    })