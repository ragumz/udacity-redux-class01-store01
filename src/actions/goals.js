import API from 'goals-todos-api'

//action string constants
export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

//********
// ACTION CREATOR FUNCTIONS
//********
function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

//********
// THUNK FUNCTIONS
//********
//Thunk function to add new Goal
export function handleAddGoal(name, cb) {
  return (dispatch) => {
    return API.saveGoal(name)
      .then((goal) => {
        dispatch(addGoal(goal))
        cb()
      })
      .catch(() => alert('There was an error. Try again.'))
  }
}

//Thunk function to remove existing Goal
export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))
    //Atualização Otimista. Remove da memória e depois invoca o backend. Se falhar, retornar ao estado anterior.
    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoal(goal))
        alert('An error occurred. Try again.')
      })
  }
}