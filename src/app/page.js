import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Countdown targetDate="2026-02-13T00:00:00" />
      <Timeline />
      <Events />
      <Gallery />
      <RSVP />
      <Location />
    </div>
  );
}
