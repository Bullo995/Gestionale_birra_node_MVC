import { categorie, sottocategoria } from "./tool.js";
let caricato = false;

document.getElementById('invioCollapse')
.addEventListener('show.bs.collapse', () => {
    
    const catArticolo = document.getElementById("categoriaAdd");
    const sottocatArticolo = document.getElementById("sottocategoriaAdd");

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
        })
        catArticolo.addEventListener(`change`, ()=>{

            sottocategoria(catArticolo.value)
            .then(sottocategorie =>{
                //sottocatArticolo.disabled = false;
                sottocatArticolo.innerHTML = "";
                sottocategorie.forEach(sottocategoria =>{
                    const newOption = document.createElement('option');
                    newOption.textContent = sottocategoria.sottocategoria;
                    newOption.value = sottocategoria.id_sottocategoria;
                    sottocatArticolo.appendChild(newOption);
                })
            })    
        })
    }
})