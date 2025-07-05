let inputDiv=document.getElementById("inputDiv").value
let submitBtn=document.getElementById("submitBtn")
let resultDiv=document.getElementById("resultDiv")
submitBtn.addEventListener('click',function(){
        let units=inputDiv
        let result=0;
        if(units<100){
            resultDiv.textContent=`you have to pay $${result}`
        }
        else if(units>100 && units<=200){
            result=(100*0)+((units-100)*5)
            resultDiv.textContent=`you have to pay $${result}`
        }
        else if(units>200 && units<=400){
            result=(100*0)+(100*5)+((units-200)*10)
            resultDiv.textContent=`you have to pay $${result}`
        }
        else if(units>400){
            result=(100*5)+(200*10)+((units-400)*20)
            resultDiv.textContent=`you have to pay $${result}`
        }
})