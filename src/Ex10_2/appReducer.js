

const AppReducer = (state ={products:[]}, action) => {
    switch (action.type) {
        case "LOAD_DATA":
            return { ...state, products: action.payload }
        
        case "ADD":
            return { ...state, products:[...state.products, action.payload] }

        case "DELETE":
            let arr2 = [...state.products]
            let index2 = arr2.filter(x=>x.name !== action.payload.name && x.price !== action.payload.price)
            return { ...state, products: index2 }
        
        default:
            return state;
    }

}

export default AppReducer;