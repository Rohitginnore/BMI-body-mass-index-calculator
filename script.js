
const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector("#Height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const result  = document.querySelector("#result");

    if(height ===''|| height < 0|| isNaN(height)){
        result.innerHTML = `Please Give a Valid Height ${height}`
    } else if(weight ===''|| weight < 0|| isNaN(weight)){
        result.innerHTML = `Please Give a Valid weight ${weight}`
    } else{
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        // showing Result;
        // result.innerHTML = `The Result value is:-  ${BMI}`
        // result.innerHTML = `<span> Result: ${BMI}</span>`;
        if(BMI<18.6){
               result.innerHTML = `<span> Result: ${BMI} , Underweight: (kam wajan)</span>`;
            // result.innerHTML = `<span> Underweight: (kam wajan) </span>`
        } else if( BMI===18.6||BMI<=24.9){
               result.innerHTML = `<span> Result: ${BMI} , Normal: (healthy)</span>`;
            // result.innerHTML = `<span> Normal: (healthy) </span>`
        } else{
               result.innerHTML = `<span> Result: ${BMI} , Obese: (bahut zyada wajan)</span>`;
            // result.innerHTML = `<span> Obese: (bahut zyada wajan) </span>`
        }
    }
});