

const AppReducer = (state ={users:[]}, action) => {
    switch (action.type) {
        case "LOAD_DATA":
            return {...state,users:action.payload}
        case "ADD":
            return { ...state,users:[...state.users, action.payload]   }
        case "UPDATE":
            let arr = [...state.users]
            let index = arr.findIndex(x => x.id == action.payload.id)
            if (index >= 0)
                arr[index] = action.payload
            return { ...state, users:arr }
        case "DELETE":
            let arr2 = [...state.users]
            let index2 = arr2.filter(x=>x.id != action.payload)
            return { ...state, users:index2}
        default:
            return state;
    }

}

export default AppReducer;