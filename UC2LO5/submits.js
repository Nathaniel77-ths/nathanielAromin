function submitt()
{
    var newLists = document.createElement("tr");
    var newDiner = document.createElement("td");
    var diner = document.getElementById("dinerTable").getElementsByTagName("tbody")[0];
    
    diner.appendChild(newLists);
    newLists.appendChild(newDiner);
    newDiner.innerHTML="NAthaniel";
    
   
}
