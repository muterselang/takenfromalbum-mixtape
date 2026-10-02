import BandcampPlayer from "./components/BandcampPlayer";
import tracks from "./data/tracks";

export default function App() {
  return (
    <main>
      <h1>mixtape</h1>

      <ol>
        {tracks.map((track) => (
          <li key={track.id}>
            <strong>{track.artist}</strong>
            <br />
            {track.title}

            <BandcampPlayer url={track.embedUrl} />
          </li>
        ))}
      </ol>
    </main>
  );
}
