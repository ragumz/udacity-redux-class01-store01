import API from 'goals-todos-api'

//action string constants
export const RECEIVE_DATA = 'RECEIVE_DATA'

//********
// ACTION CREATOR FUNCTIONS
//********
function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
    todos,
    goals,
  };
}


//********
// THUNK FUNCTIONS
//********
//Thunk function to load initial data
export function handleInitialData() {
  return (dispatch) => {
    return Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([ todos, goals ]) => {
      dispatch(receiveData(todos, goals))
    })
  }
}