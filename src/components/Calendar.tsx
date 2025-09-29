import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import type { CalendarProps } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const myEvents = [
  {
    title: "Sample event",
    start: new Date(2025, 8, 5, 10, 0), // año, mes (0-11), día, hora, minuto
    end: new Date(2025, 8, 5, 11, 0),
  },
];
export default function CustomCalendar(
  props: Omit<CalendarProps, "localizer">
) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<
    "month" | "week" | "day" | "agenda"
  >("month");

  return (
    <BigCalendar
      {...props}
      localizer={localizer}
      events={myEvents}
      date={currentDate}
      onNavigate={(newDate) => setCurrentDate(newDate)}
      endAccessor="end"
      views={["month", "week", "day", "agenda"]}
      view={currentView}
      onView={(newView) => {
        if (["month", "week", "day", "agenda"].includes(newView as string)) {
          setCurrentView(newView as "month" | "week" | "day" | "agenda");
        }
      }}
      style={{ height: 500 }}
      onSelectEvent={(event) => alert(event.title)}
      onSelectSlot={(slotInfo) =>
        alert(`Slot: ${slotInfo.start} - ${slotInfo.end}`)
      }
      selectable
    />
  );
}
