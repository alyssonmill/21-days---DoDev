// Clase

class ToDo {
    constructor(texto, prioridade){
      this.texto = texto;
      this.prioridade = prioridade;
      this.feito = false;
    }
  }
  
  // Array
  let toDoList = [];
  
  //funções projeto
  
  function CriarToDo(texto, prioridade) {
    let objetoTodo = new ToDo(texto, prioridade);
  
    const find = toDoList.some(todo => todo.texto === objetoTodo.texto);
  
    if (!find) {
      toDoList.push(objetoTodo);
      console.log("Tarefa criada com sucesso!");
    } else {
      console.log("Tarefa já existe!");
    }
  
    return objetoTodo;
  }
  
  function AtualizarToDo(textoAntigo, textoNovo) {
    let atualizado = false;
  
    toDoList.forEach(todo => {
      if (todo.texto === textoAntigo) {
        todo.texto = textoNovo;
        atualizado = true;
      }
    });
  
    return atualizado;
  }
  
  function ConcluirToDo(texto) {
    let encontrado = false;
  
    toDoList.forEach(todo => {
      if (todo.texto === texto) {
        todo.feito = !todo.feito;
        encontrado = true;
      }
    });
  
    if (!encontrado) {
      console.log("Tarefa não encontrada.");
    }
  
    return encontrado;
  }
  
  function ExcluirToDo(texto) {
    let indexToRemove = -1;
  
    toDoList.forEach((todo, index) => {
      if (todo.texto === texto) {
        indexToRemove = index;
      }
    });
  
    if (indexToRemove !== -1) {
      toDoList.splice(indexToRemove, 1);
      console.log(`Tarefa "${texto}" removida com sucesso.`);
      return true;
    } else {
      console.log(`Tarefa "${texto}" não encontrada.`);
      return false;
    }
  }
  
  function PesquisarToDo(texto) {
    let filtrar = toDoList.filter(todo => todo.texto === texto);
    
    return filtrar.length > 0;
  }
  
  function OrdenarCrescente() {
    const ordenar = toDoList.sort((a, b) => a.prioridade - b.prioridade);
    return ordenar;
  }
  
  function OrdenarDecrescente() {
    const ordenar = toDoList.sort((a, b) => b.prioridade - a.prioridade);
    return ordenar;
  }