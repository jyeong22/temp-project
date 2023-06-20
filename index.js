// function printMessage(){
//     console.log("hello") /*f12*/
// }

// function printMessage2(){
//     console.log("bye") 
// }

// function printMessage3(data){
//     console.log(data)
// }

// function printMessage4(data){
//     return data
// }
//  printMessage()
//  printMessage2()
//  printMessage3("apple")
//  console.log(printMessage4("apple"))

// function add(num1, num2){
//     console.log(num1+num2)
// }

// function multiple(num1, num2){
//     console.log(num1*num2)
// }

// function division(num1, num2){
//     console.log(num1/num2)
// }

// function subtract(num1, num2){
//     console.log(num1-num2)
// }

// function remainder(num1, num2){
//     console.log(num1%num2)
// }

// function add(num1, num2){
//     var result = num1+num2
//     console.log(result)
// }

// add(1, 2)
// multiple(1, 2)
// division(1, 2)
// subtract(1, 2)
// remainder(3, 2)

function add(){
    var num1Value = document.getElementById("num1").value
    //전역변수로 빼면 안 됨//
    var num2Value = document.getElementById("num2").value

    document.getElementById("result").innerHTML = parseInt(num1Value)+parseInt(num2Value)

}
function mul(){
    var num1Value = document.getElementById("num1").value
    var num2Value = document.getElementById("num2").value

    var resultValue = document.getElementById("result")
    resultValue.innerHTML = parseInt(num1Value)*parseInt(num2Value)

}
function div(){
    var num1Value = document.getElementById("num1").value
    var num2Value = document.getElementById("num2").value

    var resultValue = document.getElementById("result")
    resultValue.innerHTML = parseInt(num1Value)/parseInt(num2Value)

}
function sub(){
    var num1Value = document.getElementById("num1").value
    var num2Value = document.getElementById("num2").value

    var resultValue = document.getElementById("result")
    resultValue.innerHTML = parseInt(num1Value)-parseInt(num2Value)

}

function compare(){
    var num1Value = parseInt(document.getElementById("num1").value)
    var num2Value = parseInt(document.getElementById("num2").value)
    
    if(num1Value>num2Value){
        document.getElementById("result").innerHTML = "왼쪽이 크다"
    }
    else if(num1Value<num2Value){
        document.getElementById("result").innerHTML = "오른쪽이 크다"
    }
    else{
        document.getElementById("result").innerHTML = "서로 같다"
    }
}