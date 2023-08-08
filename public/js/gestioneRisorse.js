const pagePath = window.location.href;

const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');
const selectCat = document.getElementById('CatSottocategoria');
const selectSottocat = document.getElementById('Sottocategoria');

document.addEventListener("DOMContentLoaded",()=>{
  selectElement = Array.from(document.querySelectorAll('select'));
  selectElement.forEach((element)=>{
    element.value = "";
  })
    selectSottocat.disabled = true;
})



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
    let categoriaModSotto = document.getElementById('categoriaModSotto');
    

    modalTitle.textContent = `Modifica ${nomeForm}`;

    if(select.value != ""){
      let id = select.value;
      modalBodyInput.disabled = false;
      submitButton.disabled = false;
      
      
      

      riceviDati(nomeForm, id)
        .then(dati => {
          dati = Object.values(dati);
          modalBodyInput.value = dati[1];
          if(nomeForm == "Sottocategoria"){ 
            categoriaModSotto.classList.remove("d-none");
      
            fetch(pagePath+`/CategoriaAll`)
            .then(response => response.json())
            .then(data =>{
              categorie = data.dati;
              
              categorie.forEach(element => {
      
                const newOption = document.createElement('option');
                newOption.textContent = element.categoria;
                newOption.value = element.id_categoria;
                categoriaModSotto.appendChild(newOption);  
                           
              });
              categoriaModSotto.value = dati[2];
            })
          }else{
            categoriaModSotto.classList.add("d-none");
          }
        })
        .catch(error => {
          console.error('Si è verificato un errore esterno:', error);
          throw error;
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

selectCat.addEventListener('change',()=>{
  
  let idCat = selectCat.value;
  selectSottocat.innerHTML = '';

  fetch(pagePath+`/sottocatByCat/${idCat}`)
  .then(response => response.json())
  .then(data =>{
    sottocategoria = data.dati;
    
    sottocategoria.forEach(element => {
      
      const newOption = document.createElement('option');
      newOption.textContent = element.sottocategoria;
      newOption.value = element.id_sottocategoria;
      selectSottocat.appendChild(newOption);
      
    });
    
  })
  .catch(error =>{
    console.error('Si è verificato un errore esterno:', error);
    throw error;
  });
  if(selectCat.value !=""){
    selectSottocat.disabled = false;
  }
})