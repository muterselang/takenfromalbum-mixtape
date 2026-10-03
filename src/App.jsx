import { useState } from "react";
import BandcampPlayer from "./components/BandcampPlayer";
import tracks from "./data/tracks";

export default function App() {
  const [currentTrack, setCurrentTrack] = useState(0);

  const track = tracks[currentTrack];

  function nextTrack() {
    setCurrentTrack((current) =>
      current === tracks.length - 1 ? 0 : current + 1
    );
  }

  function previousTrack() {
    setCurrentTrack((current) =>
      current === 0 ? tracks.length - 1 : current - 1
    );
  }

  return (
    <main>
      <h1>mixtape</h1>

      <p>
        {track.artist} — {track.title}
      </p>

      <BandcampPlayer key={track.id} track={track} />

      <button onClick={previousTrack}>previous</button>
      <button onClick={nextTrack}>next</button>
    </main>
  );
}
