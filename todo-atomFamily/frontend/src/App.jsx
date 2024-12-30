import { useRecoilValueLoadable, RecoilRoot } from 'recoil'
import { todoAtomFamily } from './atom';

function Todo ({id}) {
  const todo = useRecoilValueLoadable(todoAtomFamily(id))   //todo here is now  a object containing state, contents.

  if(todo.state === "loading") {
    return <div>
      Loading...
    </div>                      
  } else if(todo.state === "hasValue") {
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
      </>
      )
  } else if(todo.state === "hasError") {
    return <div>
      Error while fetching the data
    </div>
  }
}

function App() {

  return <RecoilRoot>
    <Todo id={1} />
  </RecoilRoot>
}

export default App;
