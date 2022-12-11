

const AppReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, counter: state.counter + action.payload }
        case "REMOVE":
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;
    }

}

export default AppReducer;