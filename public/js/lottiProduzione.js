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
        const idProdotto = event.relatedTarget.getAttribute('data-bs-whatever');
        const lottoInput = document.getElementById("codiceLottoUpdate");
        const dataProduzioneInput = document.getElementById("dataProduzioneUpdate");
        const DataScadenzaInput = document.getElementById("dataScadenzaUpdate");
        const quantitaInput = document.getElementById("quantitaProdottoUpdate");
        const prodottoInput = document.getElementById("prodottoUpdate");

        fetch(`${pagePath}/edit/${idProdotto}`)
        .then(response => response.json())
        .then(data =>{
            const [lotto] = data.dati;
            console.log(lotto);
            lottoInput.value = lotto.codice_lotto;
            quantitaInput.value = lotto.quantita;

            const timeOffSet = 2 * 60 * 60 * 1000;
            const utcDataProduzione = new Date(lotto.data_produzione);
            const utcDataScadenza = new Date(lotto.data_scadenza);

            dataProduzioneInput.valueAsDate = new Date(utcDataProduzione.getTime() + timeOffSet);
            DataScadenzaInput.valueAsDate = new Date(utcDataScadenza.getTime() + timeOffSet);

            listaProdotti()
            .then(prodotti =>{
                prodotti.forEach(prodotto =>{
                    const newOption = document.createElement('option');
                    newOption.textContent = prodotto.nome_prodotto;
                    newOption.value = prodotto.id_prodotto;
                    prodottoInput.appendChild(newOption);
                })
                prodottoInput.value = lotto.id_prodotto;
            })
        })
        document.getElementById("formUpdate")
        .action = `${pagePath}/update/${idProdotto}`;
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
