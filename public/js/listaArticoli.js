
const host = window.location.host;
sottocatArticolo = document.getElementById("articoloAddSottoCat");
catArticolo = document.getElementById("articoloAddCat");
unitaArticolo = document.getElementById("articoloAddUnita");
document.addEventListener("DOMContentLoaded",()=>{
    selectElement = Array.from(document.querySelectorAll('select'));
    selectElement.forEach((element)=>{
        element.value = "";
    })
    sottocatArticolo.disabled = true;
})


async function categorie(){
    try {
        const response = await fetch(`http://${host}/gestioneRisorse/CategoriaAll`);
        if (!response.ok) {
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        dati = response_json.dati;
        return dati;
    } catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
}

async function sottocategoria(id){
    try{
        const response = await fetch (`http://${host}/gestioneRisorse/sottocatByCat/${id}`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        dati = response_json.dati;
        return dati; 
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
}

async function unitaM(){
    try{
        const response = await fetch (`http://${host}/gestioneRisorse/UnitaAll`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        dati = response_json.dati;
        return dati; 
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
}

document.getElementById('formInvio').
addEventListener('show.bs.collapse', () => {
    
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
        sottocatArticolo.disabled = false;
        sottocatArticolo.innerHTML = '';

        sottocategoria(catArticolo.value)
        .then(sottocategorie =>{
            sottocategorie.forEach(sottocategoria =>{
                const newOption = document.createElement('option');
                newOption.textContent = sottocategoria.sottocategoria;
                newOption.value = sottocategoria.id_sottocategoria;
                sottocatArticolo.appendChild(newOption);
            })
        })
    })
    unitaM()
    .then(unita=>{
        unita.forEach(unita=>{
            const newOption = document.createElement('option');
            newOption.textContent = unita.unita_misura;
            newOption.value = unita.id_unita_misura;
            unitaArticolo.appendChild(newOption);
        })
    })
});