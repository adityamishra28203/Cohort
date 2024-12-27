import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App () {
return (
  <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  </div>
)
}

function Count () {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer () {
  const count = useRecoilValue(countAtom);                 //here, we only require count value
  return <div>
    <b>
    {count}
    </b>
  </div>
}

function Buttons () {
  const [count, setCount] = useRecoilState(countAtom);        //here, we require both count value and state updation
  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count-1)
    }}>Decrease</button>

  </div>
}

export default App