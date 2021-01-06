//nathaniel aromin
//LO2 if and loop statements
function evenOdd()
{
    var numbers = [1,2,3,4,5,6,7,8,9,10];
    var selectedNum = document.getElementById("selectNumber");
    var evenOrOdd = selectedNum.options[selectedNum.selectedIndex].text;
    var i=0;
    if (evenOrOdd === "Even"){
        
        
        while(i < numbers.length){
            if(numbers[i] % 2 != 1 ){
                document.write(numbers[i] + " ");
            }
            
            i++;
        }
    }else{
        while(i < numbers.length){
            if(numbers[i] % 2 != 0 ){
                document.write(numbers[i] + " ");
            }
            
            i++;
        }

    }
}