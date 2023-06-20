var hundred = null
var ten = null
var unit = null
var i = 1
var j = 0
arr = []


function createRandom(){
    hundred = Math.floor(Math.random()*9)+1
    ten = Math.floor(Math.random()*9)+1
    while(hundred == ten){
        ten = Math.floor(Math.random()*9)+1
    }  
    unit = Math.floor(Math.random()*9)+1
    while(hundred == unit | ten == unit){
        unit = Math.floor(Math.random()*9)+1
    } 
    arr = [hundred, ten, unit]
    console.log(hundred*100 + ten*10 + unit)
}

function print(){
    var strike = 0
    var ball = 0
    var firstValue = parseInt(document.getElementById("first_number").value)
    var secondValue = parseInt(document.getElementById("second_number").value)
    var thirdValue = parseInt(document.getElementById("third_number").value)

    if(arr.includes(firstValue)){
        if(firstValue == hundred){
            ++strike;
        }
        else{
            ++ball;
        }
    }

    if(arr.includes(secondValue)){
        if(secondValue == ten){
            ++strike;
        }
        else{
            ++ball;
        }
    }

    if(arr.includes(thirdValue)){
        if(thirdValue == unit){
            ++strike;
        }
        else{
            ++ball;
        }
    }
    var output_string = "output"+(i++)
    var num1 = 100*firstValue + 10*secondValue +thirdValue
    document.getElementById(output_string).innerHTML = num1 + "<br>" + strike + " strike <br>" +ball+"ball"
    if(strike==3){
        alert("성공!")
    }

}

function input(e){
    var num = e.target.value
    if(j%3 ==0){
        document.getElementById("first_number").value = num;
    }
    
    else if (j%3 == 1){
        document.getElementById("second_number").value = num;
    }
    
    else{
        document.getElementById("third_number").value = num;
    }
    
    ++j
}

window.onload = function(){
// 랜덤 숫자 생성
    createRandom()

//  테이블 생성
    var tmptr = document.createElement("tr")
    document.getElementById("table").appendChild(tmptr)
    for(var i = 0; i < 9; ++i){
        var tmpth = document.createElement("th")
        tmpth.style.width = 1000/9 +'px';
        tmpth.style.fontSize = 'x-large'
        tmpth.innerHTML = i+1;
        document.getElementsByTagName("tr")[0].appendChild(tmpth)
    }
    var tmptr2 = document.createElement("tr")
    document.getElementById("table").appendChild(tmptr2)
    for(var i = 0; i < 9; ++i){
        var tmpth = document.createElement("td")
        tmpth.style.height = '80px';
        tmpth.style.fontSize = 'large'
        tmpth.id = "output" + (i+1)
        document.getElementsByTagName("tr")[1].appendChild(tmpth)
    }


//  --------------------------------------------------------------------------------------
//  버튼 생성

    var partmp = document.getElementById("buttons")
    for(var i = 0; i < 9; ++i){
        var tmpinput = document.createElement("input")
        tmpinput.type = 'button'
        tmpinput.className = 'number'
        tmpinput.value = i+1;
        tmpinput.onclick = function(e){input(e)}
        tmpinput.style.width = '70px'
        tmpinput.style.height = '70px'
        tmpinput.style.border = '2px solid green'
        tmpinput.style.borderRadius = '100px'
        tmpinput.style.backgroundColor= '#6C0'
        tmpinput.style.fontSize = 'large'
        partmp.appendChild(tmpinput)

    }

}

