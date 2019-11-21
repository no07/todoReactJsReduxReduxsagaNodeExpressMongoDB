import {FETCH_TODOS_LIST} from "../actions/types"

export const fetchTodos = (todos) => {
    return { 
        type: FETCH_TODOS_LIST,
        payload: todos
     }
  }