let dato = 'prova';
document.getElementById('add').addEventListener('click',()=>{
    riga = document.getElementById('listaArticoli');
    var contenuto = '<tr class="tr-cliccabile" onclick="test()">' +
                    '<th scope="row">'+dato+'</th>'+
                    '<td>'+dato+'</td>'+
                    '<td>'+dato+'</td>'+
                    '<td>'+dato+'</td>'+
                    '<td>'+dato+'</td>'+
                    '<td>'+dato+'</td>'+
                    '</tr>';
                    
                    riga.innerHTML += contenuto;
});
function test(){
    window.location.href = "articolo.html";
}
