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

const habit = new Book("7Habit","asdf","23", "no");
const book1 = new Book("sadfit","asdf","sdf", "no");
myLibrary.push(habit)
myLibrary.push(book1)

const habit1 = new Book("7Habit","asdf","23", "no");
const book11 = new Book("sadfit","asdf","sdf", "no");
myLibrary.push(habit1)
myLibrary.push(book11)

const habit2 = new Book("7Habit","asdf","23", "no");
const book2 = new Book("sadfit","asdf","sdf", "no");
myLibrary.push(habit2)
myLibrary.push(book2)
const habit3 = new Book("7Habit","asdf","23", "no");
const book3 = new Book("sadfit","asdf","sdf", "no");
myLibrary.push(habit3)
myLibrary.push(book3)
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

for (var key in myLibrary) {
    var bookContainer = document.createElement("div");
    bookContainer.classList.add("bookContainer");
    var list = document.createElement("ul");
    var btnCon = document.createElement("div");
    btnCon.classList.add("btnCon");
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
        }
        else{
            btn.textContent = "delete";
        }
        
        btnCon.appendChild(btn)
    }
    

    table.appendChild(bookContainer);
}

function addBook() {

}