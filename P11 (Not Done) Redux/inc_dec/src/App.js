import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { DecNum, IncNum } from './actions';

function App() {

  const myState = useSelector((state)=>state.changeNum) //aa krvathi state set thse.
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <span onClick={()=>dispatch(DecNum())}>-</span>
        <span>{myState}</span>
        <span onClick={()=>dispatch(IncNum())}>+</span>
      </div>
    </>
  );
}

export default App;
