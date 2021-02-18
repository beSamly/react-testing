// Reducer
const counterReducer = (state = { counterA: 0, counterB: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTERA':
            return { ...state, counterA: state.counterA + 1 };
        case 'INCREMENT_COUNTERB':
            return { ...state, counterB: state.counterB + 1 };
        default:
            return state;
    }
}

export default counterReducer