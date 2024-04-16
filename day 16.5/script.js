class Aluno {
    name
    age
    score

    constructor(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
    }
}

//   Array

let students = [];

//   Project functions

function CadastrarAluno(name, age, score) {
    const student = new Aluno(name, age, score)

    if (students.includes(student)) {
        alert("You can not add the same student")
    } else {
        students.push(student);
        alert("You have added a new student")
    }

    return Aluno;
}

function OrdenarPorNota(students) {
    students.sort((a, b) => b.score - a.score);
    students.reverse()
    return students;
}

function OrdernarPorIdade(students) {
    students.sort((a, b) => b.age - a.age)
    return students;
}

function OrdernarPorNome(students) {
    return students.sort((a, b) => {

        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase()

        if (nameA < nameB) {
            return -1
        }

        if (nameA > nameB) {
            return 1
        }

    })
}

function media(students) {
    if (students.length === 0) {
        return 0;
    }
    let somarNotas = 0;

    students.forEach(students => {
        somarNotas += Number(students.score);
    });
    
    const media = somarNotas / students.length;
    return media

}


let aluno1 = CadastrarAluno("Renato", "40", "6")
let aluno2 = CadastrarAluno("Aly", "21", "9")
let aluno3 = CadastrarAluno("Bru", "34", "5")
let aluno4 = CadastrarAluno("Ian", "36", "2")

let alunosOrdenados = OrdernarPorNome(students);
console.log("Alunos ordenados por nome:", alunosOrdenados);
console.log("Alunos ordenados por age:", OrdernarPorIdade(students));
console.log("Alunos ordenados por score:", OrdenarPorNota(students));
console



