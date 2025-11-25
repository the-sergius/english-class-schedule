import Calendar from "./StudentsView";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
function TeachersView() {
  return (
    <>
      <Calendar />
      <Button style={{ marginTop: "10px", marginLeft: "10px", height: "5vh" }} variant="primary">Schedule class</Button>
    </>
  );
}

export default TeachersView;
