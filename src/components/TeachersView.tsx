import Calendar from "../components/Calendar";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
function App() {
  return (
    <>
      <Calendar />
      <Button variant="primary">Agendar cita</Button>
      <Button variant="primary">Text</Button>
    </>
  );
}

export default App;
