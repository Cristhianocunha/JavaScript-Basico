// Orientada Obejto
class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read () {
        return ` estou lendo ${this.title}`
    }
}
let book = new Book('Algoritmo para viver', 'Brian', 500);
let otherBook = new Book('Um exu', 'cidinha da silva', 100)
console.log(otherBook.read())

// Herança

class ITBook extends Book{
    constructor(title, author, pages, technology){
        super(title, author, pages);
        this.technology = technology;
    }
}
let itBook =  new ITBook(' Algoritmos para viver', 'brian', 500, 'Algoritimo');
console.log(itBook);

// encapsulamento

class Person{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
}

let person = new Person('cristhiano');
person.name = 'cris'
console.log(person.name)