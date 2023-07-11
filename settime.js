// var a=document.getElementById("circle");
var c=0;
var start=setInterval(date,1000);
function date(){
    var date=new Date();
    document.getElementById("time").innerHTML=date.toLocaleTimeString();
    c++;
    if(c==80){
        document.getElementById("d").style.display="none";
        var text=document.createElement("h1");
        text.innerHTML="!!";
        di.appendChild(text);
    }
}
function stop(){
    clearInterval(start);
}