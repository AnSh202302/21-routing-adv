import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();
  return <EventItem event={data.event} />;
  // return <h1>Det</h1>;
}
export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.id;

  const res = await fetch("http://localhost:8080/events/" + eventId);

  if (!res.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return res;
  }
}
