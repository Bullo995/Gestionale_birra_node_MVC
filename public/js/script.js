function test(){ 
    console.log(document.getElementById("selectCat").value);
}

modButton = document.getElementById("modButton").addEventListener("onclick", ()=> {
    
    idCat = document.getElementById("selectCat").value;

    window.location.href="/edit/" + idCat;
});