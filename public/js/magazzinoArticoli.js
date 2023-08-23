import { categorie, sottocategoria,listaArticoli, unitaM, unitaByid } from "./tool.js";
let caricato = false;



document.getElementById('invioCollapse')
.addEventListener('show.bs.collapse', () => {
    
    const catArticoloSel = document.getElementById("categoriaAdd");
    const sottocatArticoloSel = document.getElementById("sottocategoriaAdd");
    const articoloSel = document.getElementById("articoloAdd");
    const unitaArticolo = document.getElementById("unitaArticoloAdd");
    const fornitoreArticoloSel = document.getElementById("fornitoreArticoloAdd");

    sottocatArticoloSel.disabled = true;
    articoloSel.disabled = true;
    unitaArticolo.value = "";

    // non è completo è pieno di bug 
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
        catArticoloSel.addEventListener(`change`, ()=>{

            sottocategoria(catArticoloSel.value)
            .then(sottocategorie =>{
                sottocatArticoloSel.disabled = false;
                sottocatArticoloSel.innerHTML = "";
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

                articoloSel.innerHTML = "";
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
                    let articoloSelezionato = articoloSel.options[articoloSel.selectedIndex];
                    //da controllare meglio i problemi di caricamento 
                    if(articoloSelezionato !== undefined && articoloSelezionato !== ""){
                        unitaByid(articoloSelezionato.dataset.idUnita)
                        .then(dati=>{
                        unitaArticolo.value = dati;
                        })
                    }
                }
            })
            //inserire caricamento fornitori 
        })
    }
})