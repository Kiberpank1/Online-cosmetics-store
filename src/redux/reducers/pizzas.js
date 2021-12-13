
const initialState = {
   
    items: [],
    isLoaded: false

};

const pizzas = (state = initialState , action) => {
    console.log(action, 'Reducers Pizzas')
       if ( action.type === 'SET_PIZZAS')
    return {
        ...state,
        items: action.payload, 
        
    };
    return state;    
}


export default pizzas;