const pagePath = window.location.href;
const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');

if(deleteModal){
    deleteModal.addEventListener('show.bs.modal', event => {
        const idCF = event.relatedTarget.getAttribute('data-bs-whatever');
        document.getElementById("formDelete")     
        .action = pagePath + `/delete/${idCF}`;   
    })  
};

if (editModal) {
    editModal.addEventListener('show.bs.modal', event => {
        const idCF = event.relatedTarget.getAttribute('data-bs-whatever');

        const ragioneSocialeInput = document.getElementById("ragioneSocialeUpdate");
        const partitaIvaInput = document.getElementById("partitaIvaUpdate");
        const indrizzoInput = document.getElementById("indirizzoUpdate");
        const cittaInput = document.getElementById("cittaUpdate");
        const siglaProvinciaInput = document.getElementById("siglaProvinciaUpdate");
        const capInput = document.getElementById("capUpdate");
        const emailInput = document.getElementById("emailUpdate");
        const numerTelInput = document.getElementById("numeroTelefonoUpdate");
        const clienteInput = document.getElementById("UpdateC");
        const fornitoreInput = document.getElementById("UpdateF");


        fetch (`${pagePath}/edit/${idCF}`)
        .then(response => response.json())
        .then(data =>{
            const [fornitoreCliente] = data.dati;
            
            ragioneSocialeInput.value = fornitoreCliente.ragione_sociale;
            partitaIvaInput.value = fornitoreCliente.partita_iva;
            indrizzoInput.value = fornitoreCliente.indirizzo;
            cittaInput.value = fornitoreCliente.citta;
            siglaProvinciaInput.value = fornitoreCliente.sigla_provincia;
            capInput.value = fornitoreCliente.cap;
            emailInput.value = fornitoreCliente.email;
            numerTelInput.value = fornitoreCliente.numero_telefono;
            if(fornitoreCliente.c_f === "c"){
                clienteInput.checked = true;
            }else{
                fornitoreInput.checked = true;
            }
        })


    document.getElementById("formUpdate")
    .action = `${pagePath}/update/${idCF}`;
    
    })
}