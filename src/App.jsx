import './App.css'
import Title from './components/Title/Title'
import Userlist from './components/Userlist/Userlist'
import users from './users.json'
console.log(Userlist);


function App() {

  return (
    <>
           <Title/>
           <Userlist users={users} /> 
    </>
  )
}

export default App
