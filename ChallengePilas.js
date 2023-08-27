//Define class books and the constructor
class books {
    constructor(name, ISBN, author, editorial) {
        this.name = name;
        this.ISBN = ISBN;
        this.author = author;
        this.editorial = editorial;
    }

}

//Define class BookStack and the constructor

class BookStack {
    constructor(){
        this.books = [];
    }

    push(books) {
        this.books.push(books);
    }
    
    pop() {
        return this.books.pop();
    }
    
    peek() {
        return this.books[this.books.length - 1];
    }
    
    size() {
        return this.books.length;
    }
    
    print() {
        console.log(this.books);
    }

}


const book1 = new books("Juan Bohorquez","1293812893","Jeff Bezos","20")

const stack = new BookStack();
stack.push(book1)