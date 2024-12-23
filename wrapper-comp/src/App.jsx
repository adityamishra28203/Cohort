import { useEffect, useState } from 'react'
function App() {
  return <div>
    <CardWrapper innerComponent={< TextComponent />}/>
  </div>
}

function TextComponent() {
  return <div>
    hi there from 2nd component
  </div>
}
function CardWrapper({innerComponent}) {
  return <div style={{border: "2px, solid, black", padding: 20}}>
    {innerComponent}
  </div>
}

export default App


//useEffect Hook
//it will show alert when fucntion is mount (1st time renders)

// function App() {

//   useEffect(()=> {
//    alert('hi')
//  }, [])
//   return <div>
//     hi there
//   </div>
// }
// export default App