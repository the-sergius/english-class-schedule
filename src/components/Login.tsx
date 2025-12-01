import Calendar from "./StudentsView";
import TeachersView from "./TeachersView";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Credentials from "../credentials/client_secret.json";
import RoleView from "./RoleView";
 
export default function Login(){      
    const [token, setToken] = useState(null);
    useEffect(() => {
      const hash = window.location.hash;
      if (hash.includes("access_token")) {
        const params = new URLSearchParams(hash.replace("#", ""));
        const accessToken = params.get("access_token");
        setToken(accessToken);
        
      // Limpia el hash de la URL
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);
  
  // Iniciar sesión con Google
  function login() {
    
    const authUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    `client_id=${Credentials.web.client_id}` +
    "&response_type=token" +
    `&redirect_uri=${encodeURIComponent("http://localhost:5173/")}` +
    "&scope=" +
    encodeURIComponent("https://www.googleapis.com/auth/calendar");
    
    window.location.href = authUrl;
  }
  
  //LLEVAR A SU SITIOvvv
  // Obtener eventos del calendario
  async function loadEvents() {
    const res = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    const data = await res.json();
    setEvents(data.items || []);
  }
  // Crear un evento
  async function createEvent() {
    const event = {
      summary: "Evento creado desde React + Vite 🎉",
      start: {
        dateTime: "2025-01-01T10:00:00-03:00",
      },
      end: {
        dateTime: "2025-01-01T11:00:00-03:00",
      },
    };
    //LLEVAR A SU SITIO^^^

    const res = await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      }
    );
    
    const data = await res.json();
    alert("Evento creado: " + data.summary);
  }
  if (!token) {
      return <Button onClick={login}>Iniciar sesión con Google</Button>;
    } else {
      return <RoleView />;
    }
}