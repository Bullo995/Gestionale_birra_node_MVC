const pagePath = window.location.href;

if(deleteModal){
    deleteModal.addEventListener('show.bs.modal', event => {
        const idArticolo = event.relatedTarget.getAttribute('data-bs-whatever');
        document.getElementById("formDelete")     
        .action = pagePath + `/delete/${idArticolo}`;   
    })  
};

if (editModal) {
    editModal.addEventListener('show.bs.modal', event => {
        const idArticolo = event.relatedTarget.getAttribute('data-bs-whatever');
        

        
        document.getElementById("formUpdate")
    .action = `${pagePath}/update/${idArticolo}`;
    
    })
}