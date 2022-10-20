
import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
  import { decrement,increment } from './actions/index';

function App() {
  // const [data, setData] = useState(0);
  const mystate=useSelector((state)=>state.changeNumber)
  const dispatch=useDispatch()
  return (
    <>
      <h4>using React and Redux</h4>
      <div className="quantity">
        <button className="quantity__minus" title="Decrement" onClick={()=>dispatch(decrement())} >-</button>
        <span>{mystate}</span>
        <button className="quantity__plus" title="Increment" onClick={()=>dispatch(increment())}>+</button>
      </div>
    </>
  );
}

export default App;
