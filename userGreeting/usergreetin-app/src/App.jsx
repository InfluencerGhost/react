import UserGreeting from "./UserGreeting";

function App() {
  return (
  <>
  <UserGreeting isLoggedIn={true} userName="John" />
  <UserGreeting isLoggedIn={true} />
  </> 
  );
}

export default App
