import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function RoleView() {
  const navigate = useNavigate();
  return (
    <div style={{display: "flex", height: "100vh", width: "100vw", justifyContent: "center", alignItems: "center"}}>
      <Button variant="primary" style={{width: "50vw", height: "50vh"}} onClick={() => navigate('/teachersView')}>
        Teacher
      </Button>
      <Button variant="primary" style={{width: "50vw", height: "50vh"}} onClick={() => alert("studentsView")}>
        Student
      </Button>
    </div>
  );
}