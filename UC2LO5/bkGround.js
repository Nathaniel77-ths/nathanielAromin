var chgecolor = document.getElementById("main");
var kulay = ["#3eed3b", "#2cf029", "#17cf15", "#079106"];
var counter = 0;

function palitan(){

    if( counter >= kulay.length)
    {
        counter = 0;
    }
    chgecolor.style.background = kulay[counter];
    counter++;
}
setInterval(palitan, 2000);