const pagePath = window.location.href;

const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');


function riceviDati (nomeForm, id){
  return fetch(pagePath+`/${nomeForm}Edit/${id}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Errore nella richiesta.');
    }
    return response.json();
  })
  .then(response => {
    [dati] = response.dati
    return dati; 
  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
    throw error;
  });
}


if (editModal) {
  editModal.addEventListener('show.bs.modal', event => {

    const modalTitle = editModal.querySelector('.modal-title');
    const modalBodyInput = editModal.querySelector('.modal-body input');
    const submitButton = editModal.querySelector('button[type="submit"]');
    const nomeForm = event.relatedTarget.getAttribute('data-bs-whatever');
    const form = document.getElementById("formUpdate");
    let select = document.getElementById(nomeForm);

    modalTitle.textContent = `Modifica ${nomeForm}`;

    if(select.value != ""){
      let id = select.value;
      modalBodyInput.disabled = false;
      submitButton.disabled = false;
      

      riceviDati(nomeForm, id)
        .then(dati => {
          dati = Object.values(dati);
          modalBodyInput.value = dati[1];
        })
        .catch(error => {
          console.error('Si è verificato un errore esterno:', error);
        });

      form.action = pagePath + `/${nomeForm}Update/${id}`;  
    }else{
      modalBodyInput.value = "seleziona un argomento";
      modalBodyInput.disabled = true;
      submitButton.disabled = true;
      
    }
      
  })
}

if(deleteModal){
  deleteModal.addEventListener('show.bs.modal', event => {

    const modalTitle = deleteModal.querySelector('.modal-title');
    const nomeForm = event.relatedTarget.getAttribute('data-bs-whatever');
    const form = document.getElementById("formDelete");
    const submitButton = deleteModal.querySelector('button[type="submit"]');
    let select = document.getElementById(nomeForm);

    modalTitle.textContent = `Elimina ${nomeForm}`;

    if(select.value != ""){
      let id = select.value;
      submitButton.disabled = false;
      
      form.action = pagePath + `/${nomeForm}Delete/${id}`; 

    }else{
      submitButton.disabled = true;
    }
  })
  
}
