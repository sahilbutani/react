const initial = 0;
const changeNum = (state=initial,action) => {
    switch (action.type) {
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;  
        default: return state;
    }
}
export default changeNum;