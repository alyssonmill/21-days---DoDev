// 1 - Crie uma classe Livro com as seguintes propriedades:
// Titulo - qual o nome do livro;
// Autor- quem escreveu o livro;
// Editora - qual empresa que publicou o livro;
// Ano de publicação - o ano em que o livro foi publicado;
// Disponibilidade - se o livro está disponível ou não (verdadeiro ou falso);

// 2 - Crie um método construtor para a classe Livro que recebe como parâmetro as 
// informações que serão atribuídas as propriedades, com exceção de “Disponibilidade” 
// que deve ter por padrão o valor “true” quando o objeto for criado

// 3 - Crie alguns objetos da classe Livro e adicione-os em um array;
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

let books = [];

function registerBook (titlle,autor,editora,anoPubli,disp){
    const newBook = new Book(titlle,autor,editora,anoPubli,disp)

    books.push(newBook);

    return newBook;
}

let book1 = registerBook("a","b","c","d","");
let book2 = registerBook("A","B","C","D","");







