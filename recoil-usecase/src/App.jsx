import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App () {
return (
  <div>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  </div>
)}

function Count () {
  return <div>
    <CountRenderer />
    <Buttons />
    <EvenCountRenderer />
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
  //const [count, setCount] = useRecoilState(countAtom);        //here, we require both count value and state updation

  const setCount = useSetRecoilState(countAtom)       //we actually don't need count, which was causing button component re-rendering when clicked
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)                     // here, we donot use count directly instead using func. to update the state with local var. count
    }}>Increase</button>
    
    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>

  </div>
}

function EvenCountRenderer () {
  const isEven = useRecoilValue(evenSelector)            
  return <div>
    {isEven ? "It is Even" : null}
  </div>
}

export default App