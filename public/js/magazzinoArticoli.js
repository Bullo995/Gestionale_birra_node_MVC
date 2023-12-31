import { categorie, sottocategoria,listaArticoli, unitaM, unitaByid, listaCF,articoloById } from "./tool.js";

const pagePath = window.location.href;
const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');


document.getElementById('invioCollapse')
.addEventListener('show.bs.collapse', () => {

    
    
    const catArticoloSel = document.getElementById("categoriaAdd");
    const sottocatArticoloSel = document.getElementById("sottocategoriaAdd");
    const articoloSel = document.getElementById("articoloAdd");
    const unitaArticolo = document.getElementById("unitaArticoloAdd");
    const fornitoreArticoloSel = document.getElementById("fornitoreArticoloAdd");

    let caricato = false;
    sottocatArticoloSel.disabled = true;
    articoloSel.disabled = true;
    unitaArticolo.value = "";
    catArticoloSel .innerHTML = `<option class="d-none" value="" selected>Categoria</option>`;
    sottocatArticoloSel.innerHTML = `<option class="d-none" value="" selected>Sottocategoria</option>`;
    articoloSel.innerHTML = `<option class="d-none" value="" selected>Articolo</option>`;
    fornitoreArticoloSel.innerHTML = `<option class="d-none" value="" selected>Fornitore</option>`;
    if(!caricato){
        caricato = true;
        categorie()
        .then (categorie =>{
            categorie.forEach(categoria =>{
                const newOption = document.createElement('option');
                newOption.textContent = categoria.categoria;
                newOption.value = categoria.id_categoria;
                catArticoloSel.appendChild(newOption);
            })
        })

        listaCF()
        .then(dati =>{
            dati.forEach(fornitore =>{
                const newOption = document.createElement('option');
                newOption.textContent = fornitore.ragione_sociale;
                newOption.value = fornitore.id_cliente_fornitore;
                fornitoreArticoloSel.appendChild(newOption);
            })
        })

        catArticoloSel.addEventListener(`change`, ()=>{
            sottocategoria(catArticoloSel.value)
            .then(sottocategorie =>{
                sottocatArticoloSel.disabled = false;
                sottocatArticoloSel.innerHTML = `<option class="d-none" value="" selected>Sottocategoria</option>`;

                sottocategorie.forEach(sottocategoria =>{
                    const newOption = document.createElement('option');
                    newOption.textContent = sottocategoria.sottocategoria;
                    newOption.value = sottocategoria.id_sottocategoria;
                    sottocatArticoloSel.appendChild(newOption);
                })
            })    
        })
        sottocatArticoloSel.addEventListener('change', ()=>{

            listaArticoli(sottocatArticoloSel.value)
            .then(articoli=>{

                articoloSel.innerHTML = `<option class="d-none" value="" selected>Articolo</option>`;
                articoloSel.disabled = true;
                unitaArticolo.value = "";

                if(articoli.length > 0){
                    let idUnita;
                    articoloSel.disabled = false;
                    
                    articoli.forEach(articolo =>{
                        const newOption = document.createElement('option');
                        newOption.textContent = articolo.nome_articolo;
                        newOption.value = articolo.id_articolo;
                        newOption.dataset.idUnita = articolo.id_unita_misura;
                        articoloSel.appendChild(newOption);
                    })
                    
                }
            })
        })

        articoloSel.addEventListener(`change`, ()=>{
            let articoloSelezionato = articoloSel.options[articoloSel.selectedIndex];
            if(!articoloSelezionato.dataset.idUnita ||articoloSelezionato.dataset.idUnita !=="null" ){
                unitaByid(articoloSelezionato.dataset.idUnita)
                .then(dati=>{
                unitaArticolo.value = dati;
                })
            }
        })
    }
})

if(editModal){
    editModal.addEventListener('show.bs.modal', event => {
        const idArticoloMagazzino = event.relatedTarget.getAttribute('data-bs-whatever');
        const catArticoloSel = document.getElementById("categoriaUpdate");
        const sottocatArticoloSel = document.getElementById("sottocategoriaUpdate");
        const articoloSel = document.getElementById("articoloUpdate");
        const quantitaArticoloInput = document.getElementById("quantitaArticoloUpdate");
        const unitaArticolo = document.getElementById("unitaArticoloUpdate");
        const lottoArticoloInput = document.getElementById("lottoArticoloUpdate");
        const prezzoArticoloInput = document.getElementById("prezzoArticoloUpdate");
        const dataMovimentoInput = document.getElementById("dataMovimentoArticoloUpdate");
        const dataScadenzaInput = document.getElementById("dataScadenzaArticoloUpdate");
        const fornitoreArticoloSel = document.getElementById("fornitoreArticoloUpdate");

        catArticoloSel.innerHTML = "";        
        sottocatArticoloSel.innerHTML = "";
        articoloSel.innerHTML = "";
        quantitaArticoloInput.innerHTML = "";
        unitaArticolo.innerHTML = "";
        lottoArticoloInput.innerHTML = "";
        prezzoArticoloInput.innerHTML = "";
        dataMovimentoInput.value = "";
        dataScadenzaInput.value = "";
        fornitoreArticoloSel.innerHTML = "";

        catArticoloSel.addEventListener("change", ()=>{
            articoloSel.innerHTML = `<option class="d-none" value="" selected>Articolo</option>`;
            articoloSel.disabled = true;
            sottocatArticoloSel.innerHTML = `<option class="d-none" value="" selected>Sottocategoria</option>`;
            unitaArticolo.value = "";

            sottocategoria(catArticoloSel.value)
            .then(sottocategorie =>{
                sottocategorie.forEach(sottocategoria =>{
                    const newOption = document.createElement('option');
                    newOption.textContent = sottocategoria.sottocategoria;
                    newOption.value = sottocategoria.id_sottocategoria;
                    sottocatArticoloSel.appendChild(newOption);
                })
            })
        })

        sottocatArticoloSel.addEventListener("change", ()=>{
            articoloSel.innerHTML = `<option class="d-none" value="" selected>Articolo</option>`;
            unitaArticolo.value = "";
            
            listaArticoli(sottocatArticoloSel.value)
            .then(articoli => {
                if(articoli.length > 0){
                    articoli.forEach(articolo =>{
                        const newOption = document.createElement('option');
                        newOption.textContent = articolo.nome_articolo;
                        newOption.value = articolo.id_articolo;
                        newOption.dataset.idUnita = articolo.id_unita_misura;
                        articoloSel.appendChild(newOption);
                    })
                    articoloSel.disabled = false;
                }
            })
        })
        articoloSel.addEventListener("change", ()=>{
            unitaArticolo.value = "";
            let articoloSelezionato = articoloSel.options[articoloSel.selectedIndex];
            if(!articoloSelezionato.dataset.idUnita ||articoloSelezionato.dataset.idUnita !=="null" ){
                unitaByid(articoloSelezionato.dataset.idUnita)
                .then(dati=>{
                unitaArticolo.value = dati;
                })
            }
        })

        fetch(`${pagePath}edit/${idArticoloMagazzino}`)
        .then(response => response.json())
        .then(data => {
            const [articoliMagazzino] = data.dati;
            articoloById(articoliMagazzino.id_articolo)
            .then(dati => {
                const [articolo] = dati;
                
                quantitaArticoloInput.value = articoliMagazzino.quantita_movimento;
                lottoArticoloInput.value = articoliMagazzino.codice_lotto_articolo != null ?  articoliMagazzino.codice_lotto_articolo : "";
                prezzoArticoloInput.value = articoliMagazzino.prezzo_articolo != null ? articoliMagazzino.prezzo_articolo : "";
            
                const utcDataMovimento = new Date(articoliMagazzino.data_movimento);
                const timeOffSet = 2 * 60 * 60 * 1000;
                dataMovimentoInput.valueAsDate = new Date(utcDataMovimento.getTime()+timeOffSet);


                if(articoliMagazzino.data_scadenza !== null){
                    const utcDataScadenza = new Date(articoliMagazzino.data_scadenza) ||null;
                    dataScadenzaInput.valueAsDate =  new Date(utcDataScadenza.getTime()+timeOffSet);
                }else{
                    dataScadenzaInput.value="";
                }
                categorie()
                .then (categorie =>{
                    categorie.forEach(categoria =>{
                        const newOption = document.createElement('option');
                        newOption.textContent = categoria.categoria;
                        newOption.value = categoria.id_categoria;
                        catArticoloSel.appendChild(newOption);
                    })
                    catArticoloSel.value = articolo.id_categoria;
                })

                sottocategoria(articolo.id_categoria)
                .then(sottocategorie =>{
                    sottocategorie.forEach(sottocategoria =>{
                        const newOption = document.createElement('option');
                        newOption.textContent = sottocategoria.sottocategoria;
                        newOption.value = sottocategoria.id_sottocategoria;
                        sottocatArticoloSel.appendChild(newOption);
                    })
                    sottocatArticoloSel.value = articolo.id_sottocategoria;
                })
                listaArticoli(articolo.id_sottocategoria)
                .then(articoli => {
                    articoli.forEach(articolo =>{
                        const newOption = document.createElement('option');
                        newOption.textContent = articolo.nome_articolo;
                        newOption.value = articolo.id_articolo;
                        newOption.dataset.idUnita = articolo.id_unita_misura;
                        articoloSel.appendChild(newOption);
                    })
                    articoloSel.value = articoliMagazzino.id_articolo;
                    let articoloSelezionato = articoloSel.options[articoloSel.selectedIndex];
                    if(!articoloSelezionato.dataset.idUnita ||articoloSelezionato.dataset.idUnita !=="null" ){
                        unitaByid(articoloSelezionato.dataset.idUnita)
                        .then(dati=>{
                        unitaArticolo.value = dati;
                        })
                    }else{
                        unitaArticolo.value = "";
                    }
                    
                })
                listaCF()
                .then(dati =>{
                    dati.forEach(fornitore =>{
                        const newOption = document.createElement('option');
                        newOption.textContent = fornitore.ragione_sociale;
                        newOption.value = fornitore.id_cliente_fornitore;
                        fornitoreArticoloSel.appendChild(newOption);
                    })
                    fornitoreArticoloSel.value = articoliMagazzino.id_fornitore;
                })
    
            });
            
        })
        document.getElementById("formUpdate")
        .action = `${pagePath}update/${idArticoloMagazzino}`;
        
    })
}

if(deleteModal){
    deleteModal.addEventListener('show.bs.modal', event => {
        const idArticoloMagazzino = event.relatedTarget.getAttribute('data-bs-whatever');
        document.getElementById("formDelete")     
        .action = pagePath + `delete/${idArticoloMagazzino}`;   
    })  
  };