import Calendar from "./components/Calendar";
function App() {
  let rol = "not-logged-in";
  if (rol == "teacher") {
    return <Calendar />;
  } else if (rol == "student") {
    return <Calendar />;
  } else {
    return <h1>Acceso denegado</h1>;
  }
}

export default App;
