import {categorie,sottocategoria,unitaM} from "./tool.js";

const pagePath = window.location.href;

const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');



document.addEventListener("DOMContentLoaded",()=>{
    let selectElement = Array.from(document.querySelectorAll('select'));
    selectElement.forEach((element)=>{
        element.value = "";
    })
    document.getElementById("articoloAddSottoCat").disabled = true;
})

document.getElementById('formInvio')
.addEventListener('show.bs.collapse', () => {
    
    const sottocatArticolo = document.getElementById("articoloAddSottoCat");
    const catArticolo = document.getElementById("articoloAddCat");
    const unitaArticolo = document.getElementById("articoloAddUnita");

    if(catArticolo.options.length === 1 ){
        categorie()
        .then (categorie =>{
            categorie.forEach(categoria =>{
                const newOption = document.createElement('option');
                newOption.textContent = categoria.categoria;
                newOption.value = categoria.id_categoria;
                catArticolo.appendChild(newOption);
            })
        })
    } 
    catArticolo.addEventListener(`change`, ()=>{

        sottocategoria(catArticolo.value)
        .then(sottocategorie =>{
            sottocatArticolo.disabled = false;
            sottocatArticolo.innerHTML = "";
            sottocategorie.forEach(sottocategoria =>{
                const newOption = document.createElement('option');
                newOption.textContent = sottocategoria.sottocategoria;
                newOption.value = sottocategoria.id_sottocategoria;
                sottocatArticolo.appendChild(newOption);
            })
        })    
    })
    if(unitaArticolo.options.length === 1 ){
        unitaM()
        .then(unita=>{
            unita.forEach(unita=>{
                const newOption = document.createElement('option');
                newOption.textContent = unita.unita_misura;
                newOption.value = unita.id_unita_misura;
                unitaArticolo.appendChild(newOption);
            })
        })
    }
});


if(deleteModal){
    deleteModal.addEventListener('show.bs.modal', event => {
        const idArticolo = event.relatedTarget.getAttribute('data-bs-whatever');
        document.getElementById("formDelete")     
        .action = pagePath + `/delete/${idArticolo}`;   
    })  
  };


if (editModal) {
    editModal.addEventListener('show.bs.modal', event => {
    const catArticolo = document.getElementById("articoloUpdateCat");
    const sottocatArticolo = document.getElementById("articoloUpdateSottoCat");
    const nomeArticolo = document.getElementById("articoloUpdateNome");
    const descrizioneArticolo = document.getElementById("articoloUpdateDescrizione");
    const capacitaArticolo = document.getElementById("articoloUpdateCapacita");
    const unitaArticolo = document.getElementById("articoloUpdateUnita");
    const idArticolo = event.relatedTarget.getAttribute('data-bs-whatever');
    let caricato = false;
        
    catArticolo.innerText = "";
    sottocatArticolo.innerText = "";
    nomeArticolo.innerText = "";
    descrizioneArticolo.innerText = "";
    capacitaArticolo.innerText = "";
    unitaArticolo.innerText = "";
    
    fetch (`${pagePath}/edit/${idArticolo}`)
    .then(response => response.json())
    .then(data =>{
        const [articolo] = data.dati;

        if(!caricato){
            caricato = true; 
            categorie()
            .then (categorie =>{
                categorie.forEach(categoria =>{
                    const newOption = document.createElement('option');
                    newOption.textContent = categoria.categoria;
                    newOption.value = categoria.id_categoria;
                    catArticolo.appendChild(newOption);
                })
                catArticolo.value = articolo.id_categoria;
            })
            sottocategoria(articolo.id_categoria)
            .then(sottocategorie =>{
                sottocategorie.forEach(sottocategoria =>{
                    const newOption = document.createElement('option');
                    newOption.textContent = sottocategoria.sottocategoria;
                    newOption.value = sottocategoria.id_sottocategoria;
                    sottocatArticolo.appendChild(newOption);
                })
                sottocatArticolo.value = articolo.id_sottocategoria;
            })
            unitaM()
            .then(unita=>{
                unitaOpt = document.createElement('option');
                unitaOpt.textContent = "Unita misura";
                unitaOpt.value = "";
                unitaArticolo.appendChild(unitaOpt);
                unita.forEach(unita=>{
                const newOption = document.createElement('option');
                newOption.textContent = unita.unita_misura;
                newOption.value = unita.id_unita_misura;
                unitaArticolo.appendChild(newOption);
                })

                unitaArticolo.value = articolo.id_unita_misura;
            })
            nomeArticolo.value = articolo.nome_articolo;
            descrizioneArticolo.value = articolo.descrizioneArticolo == null ? "" : articolo.descrizioneArticolo;
            capacitaArticolo.value = articolo.capacita == null ? "" : articolo.capacita;
        }
        catArticolo.addEventListener(`change`, ()=>{
            caricato = false;
            sottocatArticolo.innerHTML = '';

            sottocategoria(catArticolo.value)
            .then(sottocategorie =>{
                sottocategorie.forEach(sottocategoria =>{
                    const newOption = document.createElement('option');
                    newOption.textContent = sottocategoria.sottocategoria;
                    newOption.value = sottocategoria.id_sottocategoria;
                    sottocatArticolo.appendChild(newOption);
                })
                sottocatArticolo.value = articolo.id_sottocategoria;
            })
        })
    })

    document.getElementById("formUpdate")
    .action =  `${pagePath}/update/${idArticolo}`;
    
    })
}