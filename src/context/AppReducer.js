export default ( state,action) => {
  switch (action.type){
    case "ADD_TRANSACCION":
        return{
            ...state,
       transacciones: [...state.transacciones,action.payload]
        }
        default:
            return state
  }
}