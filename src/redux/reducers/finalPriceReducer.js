const initialState = {
	price: 0,
	month: 3,
}

export const finalPriceReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_FINAL_PRICE': 
			return {
				...state,
				price: action.payload
			}
		case 'SET_MONTH': 
			return {
				...state,
				month: action.payload
			}

		default:
			return state;
	}
}