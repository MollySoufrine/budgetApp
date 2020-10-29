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
    default:
      // when default just return state as is
      return state;
  }
};
