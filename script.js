

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

bookCount = 0;
const table = document.getElementById("table");


const propOwn = Object.getOwnPropertyNames(Book);




//---------------------------------------------------------------
function resetBookGrid() {
    table.innerHTML = '';
}




//localStorage

function localAdd() {
    resetBookGrid()
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key == null){
            return
        }
        book = JSON.parse(localStorage.getItem(key));
        localDisplay(key, book)
    }
}

localAdd();

function localDisplay(key, book) {
    
    var bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");
    bookContainer.setAttribute('data', key)
    var list = document.createElement("ul");
    var btnCon = document.createElement("div");
    btnCon.classList.add("btnCon");
    btnCon.setAttribute('data-delete', key)
    bookContainer.appendChild(list)
    bookContainer.appendChild(btnCon)
    var obj = book
    for (var item in obj) {
        var listItem = document.createElement("li");
        
        
        listItem.textContent = `${item[0].toUpperCase()}${item.slice(1)}: ${obj[item]} `;
        list.appendChild(listItem);

    }
    for(let i = 0; i < 2; i++) {
        var btn = document.createElement("button");
        
        
        if(i === 0) {
            btn.classList.add("readBtn")
            btn.textContent = 'Read';
            
            
        }
        else{
            btn.classList.add("removeBtn")
            btn.textContent = 'Remove';
        }
        
        btnCon.appendChild(btn);
    }
    

    table.appendChild(bookContainer);

    
}


function Storage() {
    book = getBookFormInput();
    while(localStorage.getItem(bookCount)) {
        bookCount++;
    }
    localStorage.setItem(bookCount, JSON.stringify(book));
    bookCount +=1;
    

}

// Modal 
function getBookFormInput() {
    const title = document.getElementById('booktitle').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementsByName('read');
    for(i = 0; i < read.length; i++) {
        if(read[i].checked) {
            var readValue = read[i].value;
        }
    }
    return new Book(title,author,pages,readValue)
    
}

function removeBook() {
    deleteBtn = document.querySelectorAll('.removeBtn')
    deleteBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            const index = this.parentNode.dataset.delete;
            localStorage.removeItem(index);
            const el = document.querySelector('[data=' + CSS.escape(index) + "]");
            el.remove();
            
        })
    })
}

function read() {
    readBtn = document.querySelectorAll('.readBtn')
    readBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            const index = this.parentNode.dataset.delete
            book = JSON.parse(localStorage.getItem(index))
            readValue = book.read
            console.log(readValue)
            if (readValue == "No") {
                book.read = "Yes"
            } else {
                book.read = "No"
            }
            parentNode = document.querySelector('[data=' + CSS.escape(index) + "]")
            bookContainerValue = parentNode.getElementsByTagName("li")[3]
            bookContainerValue.textContent = "Read: " + book.read
            localStorage.setItem(index,JSON.stringify(book))
            
            
        })
    })
}

removeBook()
read()


function closeModal(){
    document.querySelector('.formContainer-modal').style.display ='none';
}

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    Storage()
    localAdd()
    removeBook()
    read()
    // addBook()
    closeModal()
})


document.getElementById('addBtn').addEventListener('click', function() {
    document.querySelector('.formContainer-modal').style.display ='flex';
})
       

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.formContainer-modal').style.display ='none';
})

