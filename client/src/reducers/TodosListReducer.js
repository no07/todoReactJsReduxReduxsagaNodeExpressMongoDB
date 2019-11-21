import {FETCH_TODOS_LIST} from "../actions/types"
const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FETCH_TODOS_LIST:
        return { ...payload }

    default:
        return state
    }
}
