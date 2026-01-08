import Person from './person.tsx'

import './App.css'

function App() {
  const fetchUser = () => ({name: "Jade", age: 12, isMarried: true})
  const userFetched = fetchUser();  
 
  return (
    <div>
    <Person name={"Iyke"} age={22} isMarried={false}/>
    <Person {...userFetched} />
    </div>
  )
}

export default App;
