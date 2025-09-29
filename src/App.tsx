import Calendar from "./components/Calendar";
import TeachersView from "./components/TeachersView";

function App() {
  let rol = "teacher";
  if (rol == "teacher") {
    return <TeachersView/>;
  } else if (rol == "student") {
    
    return <Calendar />;
  } else {
    return <h1>Acceso denegado</h1>;
  }
}

export default App;
