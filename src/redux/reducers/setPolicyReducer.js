const initialState = {
	policyNumber: 0
}

export const setPolicyReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_POLISY_NUMBER': {
			return {
				...state,
				policyNumber: action.payload
			}
		}

		default:
			return state;
	}
};