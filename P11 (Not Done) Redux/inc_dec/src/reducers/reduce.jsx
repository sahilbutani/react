import { combineReducers } from 'redux';
import changeNum from '../reducers/inc_dec'

const rootReducer = combineReducers({
    changeNum //ahi hve jetla pn another reducer ave tene , no use kri ne add kri sakay.
})
export default rootReducer;