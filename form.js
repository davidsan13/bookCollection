
// import {Book, myLibrary} from './script.js';

const wrapper = document.querySelector('.formContainer'),
        form = wrapper.querySelectorAll('#bookForm'),
        submitInput = form[0].querySelector('input[type="submit"]');
    
function getDataForm(e){
    
    e.preventDefault();

    var formData = new FormData(form[0]);

    
    booktitle = formData.get('booktitle');
    localStorage.setItem("booktitle", booktitle);
    author = formData.get('author');
    pages = formData.get('pages');
    read = formData.get('Read');
    const book = new Book(booktitle, author, pages, read)
    myLibrary.push(book)
}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', getDataForm, false);
}, false);

