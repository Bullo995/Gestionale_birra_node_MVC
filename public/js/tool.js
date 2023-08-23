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
        const response = await fetch (`http://${host}/gestioneRisorse//UnitaEdit/${id}`);
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