// - Crie uma classe Biblioteca com as seguintes propriedades:
//    - Nome - nome da biblioteca;
//    - Endereco - onde a biblioteca fica localizada;
//    - Telefone - telefone de contato da biblioteca;
//    - Acervo de livros - todos os livros que existem na biblioteca

// 5 - Crie um método construtor para a classe Biblioteca que deve receber 
// como parâmetro as informações que serão atribuídas as propriedades, a 
// propriedade Acervo de Livros deve receber um array;


// 6 - Adicione na classe Biblioteca um método para buscar um livro 
// específico, deve passar como parâmetro o nome do livro e exibir no 
// console todas as informações de um livro;


// DESAFIO DIA #17:

// Biblioteca DoDev pt.2

class Book {
    titlle
    autor
    editora
    anoPubli
    disp
    constructor(titlle,autor,editora,anoPubli,disp){
        this.titlle = titlle;
        this.autor = autor;
        this.editora = editora;
        this.anoPubli = anoPubli;
        this.disp = true;
    }

    a (titlle,autor,editora,anoPubli,disp){
        console.log("Hello World")
    }
}

class Library {
    name
    addres
    phone
    qtdBook
    constructor(name,addres,phone,qtdBook){
        this.name = name;
        this.addres = addres;
        this.phone = phone;
        this.qtdBook = [];
    }

    searchBook (tittle){
        
        console.log("Hello World")
    }
}

let books = [];

function registerBook (titlle,autor,editora,anoPubli,disp){
    const newBook = new Book(titlle,autor,editora,anoPubli,disp)

    books.push(newBook);

    return newBook;
}



let book1 = registerBook("a","b","c","d","");
let book2 = registerBook("A","B","C","D","");







