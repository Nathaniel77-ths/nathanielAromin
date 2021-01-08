function sltAll(){
    const diners = document.querySelectorAll("#dinerTable li.ly");
    
    Array.from(diners).forEach(function(diner){
        console.log(diner);
    })
}
