import {unitaM} from "./tool.js";
const pagePath = window.location.href;

const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');

document.getElementById('formInvio')
.addEventListener('show.bs.collapse', () => {
    const unitaMisuraSelect = document.getElementById("unitaMisuraAdd");
    unitaMisuraSelect.innerHTML = `<option class="d-none" value="" selected>Unita misura</option>`;
    
    unitaM()
    .then(unita =>{
        unita.forEach(unita=>{
            const newOption = document.createElement('option');
            newOption.textContent = unita.unita_misura;
            newOption.value = unita.id_unita_misura;
            unitaMisuraSelect.appendChild(newOption);
        })
    })
})

if(deleteModal){
    deleteModal.addEventListener('show.bs.modal', event => {
        const idProdotto = event.relatedTarget.getAttribute('data-bs-whatever');
        
        console.log(idProdotto);
        document.getElementById("formDelete")     
        .action = pagePath + `/delete/${idProdotto}`;   
    })  
  };

  if(editModal) {
    editModal.addEventListener('show.bs.modal', event => {
        const idProdotto = event.relatedTarget.getAttribute('data-bs-whatever');

        const nomeInput = document.getElementById("nomeUpdate");
        const descrizioneInput = document.getElementById("descrizioneUpdate");
        const capacitaInput = document.getElementById("capacitaUpdate");
        const unitaMisuraInput = document.getElementById("unitaMisuraUpdate");
        const prezzoInput = document.getElementById("prezzoUpdate");

        fetch(`${pagePath}/edit/${idProdotto}`)
        .then(response => response.json())
        .then(dato =>{
            const [prodotto] = dato.dati;
            console.log(prodotto);
            nomeInput.value = prodotto.nome_prodotto;
            descrizioneInput.value = prodotto.descrizione_prodotto;
            capacitaInput.value = prodotto.capacita;
            prezzoInput.value = prodotto.prezzo_listino;
            unitaMisuraInput.innerHTML = ``;
            unitaM()
            .then(unita =>{
                unita.forEach(unita=>{
                    const newOption = document.createElement('option');
                    newOption.textContent = unita.unita_misura;
                    newOption.value = unita.id_unita_misura;
                    unitaMisuraInput.appendChild(newOption);
                })
                unitaMisuraInput.value = prodotto.id_unita_misura;
            })
        })
        
    document.getElementById("formUpdate")
    .action =  `${pagePath}/update/${idProdotto}`;

    })
  }