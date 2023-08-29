const host = window.location.host;
export async function categorie () {
    try {
        const response = await fetch(`http://${host}/gestioneRisorse/CategoriaAll`);
        if (!response.ok) {
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const dati = response_json.dati;
        return dati;
    } catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
};

export async function sottocategoria(id){
    try{
        const response = await fetch (`http://${host}/gestioneRisorse/sottocatByCat/${id}`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const dati = response_json.dati;
        return dati; 
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
};

export async function unitaM(){
    try{
        const response = await fetch (`http://${host}/gestioneRisorse/UnitaAll`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const dati = response_json.dati;
        return dati; 
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
};

export async function listaArticoli(idSottocat){
    try{
        const response = await fetch (`http://${host}/listaArticoli/articolo/${idSottocat}`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const dati = response_json.dati;
        return dati; 
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
};

export async function unitaByid(id){
    try{
        const response = await fetch (`http://${host}/gestioneRisorse/UnitaEdit/${id}`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const [dati] = response_json.dati;
        return dati.unita_misura;
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
}

export async function listaCF(){
    try{
        const response = await fetch (`http://${host}/anagraficaClientiFornitori/lista`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const dati = response_json.dati;
        return dati;
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
}

export async function articoloById(idArticolo){
    try{
        const response = await fetch (`http://${host}/listaArticoli/edit/${idArticolo}`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const dati = response_json.dati;
        return dati;

    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
}

export async function listaProdotti(){
    try{
        const response = await fetch (`http://${host}/listaProdotti/all`);
        if(!response.ok){
            throw new Error('Errore nella richiesta.');
        }
        const response_json = await response.json();
        const dati = response_json.dati;
        return dati;
    }catch (error) {
        console.error('Si è verificato un errore:', error);
        throw error;
    }
}