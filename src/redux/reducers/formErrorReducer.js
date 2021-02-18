const initialState = {
	textOfError: '',
	confChecked: false,
}

export const formErrorReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'SET_FORM_ERROR':
			return {
				...state,
				textOfError: action.payload
			}
		case 'CONF_CHECK': 
			return {
				...state,
				confChecked: action.payload
			}

		default: 
			return state;
	}
};