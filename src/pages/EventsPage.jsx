import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Event 1",
  },
  {
    id: "e2",
    title: "Event 2",
  },
  {
    id: "e3",
    title: "Event 3",
  },
];

function EventsPage() {
  return <EventsList events={DUMMY_EVENTS} />;
}
export default EventsPage;
