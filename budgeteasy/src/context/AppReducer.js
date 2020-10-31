export default (state, action) => {
  switch (
    action.type //switch based on a type
  ) {
    //checking the actions type
    case "DELETE_TRANSACTION":
      return {
        //change your state, create a new state and send it down because we cant just change it
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
        //return all the transactions excpet the one with the id that was deleted
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    //return transactions that are already there in addtion to the enw one
    default:
      // when default just return state as is
      return state;
  }
};

//state "hovers" over components which you use to change/send down to your state
//actions can be used to call to send up
