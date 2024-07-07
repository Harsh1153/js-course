const form = document.querySelector('form')
// this usecase will give you empty values.
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    //yaha hum values ko tab he lena chayege jab hum voh event pr submit karege , agar form load ke baad values call ki toh vaha empty values store hogi.
    
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please Give A Valid Height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please Give A Valid weight ${weight}`
    } else{
      const bmi = (weight / ((height * height)/ 1000)).toFixed(2)
      // show the result
      const guide = bmi < 18.6 ? `Under Weight`:bmi > 18.6 && bmi < 24.9 ? `Normal Weight`:`Over-Weight`
      results.innerHTML = `<span>${bmi} : ${guide}</span>`;
      
    }
   // const guide = document.querySelector('#guide')
   
})