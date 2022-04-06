let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    // this.info = function() {
    //     console.log( `${this.title} by ${this.author}, ${this.pages}, ${this.read} `)
    // }
}

const habit = new Book("7Habitasdfasdfasdf sadf asdf saf asf sfsdfasdf sadf asdf asdf asdf ","asdf","23", "no");
const book1 = new Book("sadfit","asdf","sdf", "no");
myLibrary.push(habit)
myLibrary.push(book1)

const habit1 = new Book("7Habit","asdf","23", "no");
const book11 = new Book("sadfit","asdf","sdf", "no");
myLibrary.push(habit1)
myLibrary.push(book11)
// habit.info();
function addBookLibrary() {
    title= prompt("title")
    author = prompt("author")
    pages = prompt("pages")
    read = prompt("read")

    const newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
}   

// addBookLibrary()

const table = document.getElementById("table");

// myLibrary.forEach(function(items) {
//     var row = document.createElement("tr");
// //     items.forEach(function(item) {
// //         var cell = document.createElement("td");
// //         cell.textContent = item;
// //         row.appendChild(cell);
// //     });
//     row.textContent = items.title
//     tbody.appendChild(row);
// })

// for(let i = 0; i < propOwn.length; i++ ) {
//     var row = document.createElement("tr");
//     row.textContent = 
//     tbody.appendChild(row);
// }
// myLibrary.forEach(function(items) {
//     console.log(items)
//     console.log(items.author)
//     console.log(items.pages)
//     console.log(items.read) 
// });
const propOwn = Object.getOwnPropertyNames(Book);

function displayBooks() {
    for (var key in myLibrary) {
        var bookContainer = document.createElement("div");
        bookContainer.classList.add("bookContainer");
        bookContainer.setAttribute('data', key)
        var list = document.createElement("ul");
        var btnCon = document.createElement("div");
        btnCon.classList.add("btnCon");
        btnCon.setAttribute('data-delete', key)
        bookContainer.appendChild(list)
        bookContainer.appendChild(btnCon)
        var obj = myLibrary[key]
        for (var item in obj) {
            var listItem = document.createElement("li");
           
            
            listItem.textContent = `${item[0].toUpperCase()}${item.slice(1)}: ${obj[item]} `;
            list.appendChild(listItem);
            
            console.log(obj[item])
        }
        for(let i = 0; i < 2; i++) {
            var btn = document.createElement("button");
            btn.classList.add("material-icons")
            if(i === 0) {
                btn.textContent = "edit" ;
                btn.classList.add("read")
            }
            else{
                btn.textContent = "delete";
                btn.classList.add("delete")
                btn.setAttribute('data-delete', key)
            }
            
            btnCon.appendChild(btn);
        }
        
    
        table.appendChild(bookContainer);
    }
    removeBook()
    read()
    
}

displayBooks();

function resetBookGrid() {
    table.innerHTML = '';
}
function addBook() {
    const book = getBookFormInput();
    console.log("Hello")
    myLibrary.push(book);
    resetBookGrid();
    displayBooks();
}

function read() {
    readBtn = document.querySelectorAll('.material-icons.read')
    readBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            index = this.parentNode.dataset.delete
            readValue = myLibrary[index].read
            console.log(readValue)
        })
    })
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
    deleteBtn = document.querySelectorAll('.material-icons.delete')
    deleteBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            const index = this.dataset.delete;
            myLibrary.splice(index, 1);
            resetBookGrid();
            displayBooks()
        })
    })
}





function closeModal(){
    document.querySelector('.formContainer-modal').style.display ='none';
}

document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    addBook()
    closeModal()
})


document.getElementById('bookBtn').addEventListener('click', function() {
    document.querySelector('.formContainer-modal').style.display ='flex';
})
       

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.formContainer-modal').style.display ='none';
})

