//nathaniel aromin
//LO2 if and loop statements
function oddEvenFor()
{
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    var selectedNum = document.getElementById("selectNumber");
    var evenOrOdd = selectedNum.options[selectedNum.selectedIndex].text;
   
    if (evenOrOdd === "Even"){
        for(var i=0; i< numbers.length; i++){
            if(numbers[i] % 2 != 1 ){
                document.write(numbers[i] + " ");
            }
        }
    }else{
        for(var i=0; i< numbers.length; i++){
            if(numbers[i] % 2 != 0 ){
                document.write(numbers[i] + " ");
            }
            
            i++;
        }

    }
}