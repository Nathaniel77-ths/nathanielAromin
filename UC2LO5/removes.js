function removerr()
{
    var diner = document.getElementById("dinerTable").getElementsByTagName("tbody")[0];
    var tableRow = diner.getElementsByTagName("tr")[2];
    diner.removeChild(tableRow);
}