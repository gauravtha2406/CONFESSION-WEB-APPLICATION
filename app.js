let notesObj;
let confessbtn = document.getElementById('confess-btn');
confessbtn.addEventListener('click', function (e) {
    let confess = document.getElementById('confess');
    let category;
    let dreams = document.getElementById('dream');
    let guilts = document.getElementById('guilt');
    let lies = document.getElementById('lie');
    if (dreams.selected) {
        category = 'a dream';
    }
    else if (guilts.selected) {
        category = 'a guilt';
    }
    else if (lies.selected) {
        category = 'a lie';
    }

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myobj = {
        yourconfession: confess.value,
        type: category
    }

    notesObj.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    alertmessage('Your confession is sucessfully sumbitted','success');
    clearfields();
});


function showNotes() {
   
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2" style="width: 18rem;">
        
       <div class="card-body">
         <h5 class="card-title">${element.type}</h5>
         <p class="card-text">${element.yourconfession}</p>
         <button id="${index}"onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
       </div>
     </div>`
    });

    let notesElm = document.getElementById('final-notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show Please confess and relax`;
    }
}

function clearfields() {
    document.getElementById('confess').value = '';
    document.getElementById('name').value = '';


}

function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    alertmessage('you deleted your confession','danger');

}

function alertmessage(msg,color){
let message=document.getElementById('message');
let ht=`<div class="alert alert-${color}" role="alert">
${msg}
</div>`
message.innerHTML = ht;
}



