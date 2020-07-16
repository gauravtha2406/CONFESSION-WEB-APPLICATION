console.log('confess')

class confession {
    constructor(name, category, confess) {
        this.name = name;
        this.category = category;
        this.confess = confess;
    }



}
class display {
    static displayconfessions(){
        const books = Store.getBooks();
        books.forEach((element) => display.add(element));
    }
   static add(cat) {
        let cardbody = document.getElementById('notes')
        let cardstring = `<div class="card my-2 mx-2" style="width: 18rem;">
        
        <div class="card-body">
          <h5 class="card-title">${cat.category}</h5>
          <p class="card-text">${cat.confess}</p>
          <a href="#" class="btn btn-primary deletebtn" id="btn-delete">Delete</a>
        </div>
      </div>`
        cardbody.innerHTML += cardstring;
    }
   static clear() {
        let libraryform = document.getElementById('library-form');
        libraryform.reset();
    }
    
    static deletecon(el){
        if(el.classList.contains('deletebtn')){
            el.parentElement.parentElement.parentElement.remove();
        }


    }
        
}    
     
class store{
    static getstore(){
       
        let bookobj;
        if(localStorage.getItem('books') === null) {
          bookobj = [];
        } else {
          bookobj = JSON.parse(localStorage.getItem('books'));
        }
    
        return bookobj;
      }   

    
    static addstore(cat){
        const bookobj = store.getstore();
       bookobj.push(cat)
        localStorage.setItem('books', JSON.stringify(bookobj));
    }
    static removestore(index){
        let books;
        if(localStorage.getItem('books') === null) {
          books = [];
        } else {
          books = JSON.parse(localStorage.getItem('books'));
        }
        books.splice(index,1);
        localStorage.setItem('books', JSON.stringify(cat));
        addstore();
    }
}
        
        


    






let libraryform = document.getElementById('library-form');
libraryform.addEventListener('submit', confessionform);

function confessionform(e) {
    e.preventDefault();
    console.log('submitted');
    let name = document.getElementById('name').value;
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
    let confessions = document.getElementById('confess').value;

    let cat = new confession(name, category, confessions);

   display.add(cat);

   store.addstore(cat);

   display.clear();

  document.getElementById("notes").addEventListener('click',function(e){
   display.deletecon(e.target);

  })

    
   
}






