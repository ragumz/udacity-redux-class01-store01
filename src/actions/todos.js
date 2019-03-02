import API from 'goals-todos-api'

//action string constants
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

//********
// ACTION CREATOR FUNCTIONS
//********
function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

//********
// THUNK FUNCTIONS
//********
//Thunk function to add new TODO
export function handleAddTodo(name, cb) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        cb()
      })
      .catch(() => {
        alert('There was an error. Try again.')
      })
  }
}

//Thunk function to remove existing TODO
export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))
    //Atualização Otimista. Remove da memória e depois invoca o backend. Se falhar, retornar ao estado anterior.
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo))
        alert('An error occurred. Try again.')
      })
  }
}

//Thunk function to toggle TODO completeness
export function handleToggleTodo (id) {
  return (dispatch) => {
    dispatch(toggleTodo(id))
    //Atualização Otimista. Executa o toggle imediatamente. Se falhar, retornar ao estado anterior.
    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id))
        alert('An error occurred. Try again.')
      })
  }
}