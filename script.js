document.getElementById("myButton").onclick = function(){
    document.getElementById("text").innerHTML = "Hello Everyone!";
}

document.getElementById("newButton").onclick = function(){
    document.getElementById('secondText').innerHTML = 'Wait! ' + document.getElementById('secondText').innerHTML + 'nice';
}

document.getElementById('thirdButton').onclick =function(){
    document.getElementById('empty').innerHTML= "<input>";
}