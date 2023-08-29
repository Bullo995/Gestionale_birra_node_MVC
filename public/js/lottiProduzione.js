import {listaProdotti} from "./tool.js"

const pagePath = window.location.href;

const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');

document.getElementById('formInvio')
.addEventListener('show.bs.collapse', () => {
    const prodottiSel = document.getElementById("prodottoAdd");

    prodottiSel.innerHTML = `<option class="d-none" value="" selected>Prodotti</option>`;

    listaProdotti()
    .then(Prodotti=>{
        Prodotti.forEach(prodotto=>{
            const newOption = document.createElement('option');
            newOption.textContent = prodotto.nome_prodotto;
            newOption.value = prodotto.id_prodotto;
            prodottiSel.appendChild(newOption);
        })
    })
})

if(editModal) {
    editModal.addEventListener('show.bs.modal', event => {

    })
};

if(deleteModal){
    deleteModal.addEventListener('show.bs.modal', event => {
        const idProdotto = event.relatedTarget.getAttribute('data-bs-whatever');
        
        console.log(idProdotto);
        document.getElementById("formDelete")     
        .action = pagePath + `/delete/${idProdotto}`;   
    })  
};
