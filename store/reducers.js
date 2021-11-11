import {LOGIN, REGISTER} from "../constants/redux";

const initialState = {
    token: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOGIN:
            return {
                ...state,
                token: payload
            }
        case REGISTER:
            return {
                ...state,
                token: payload
            }
    }

    return {
        ...state
    }
}
