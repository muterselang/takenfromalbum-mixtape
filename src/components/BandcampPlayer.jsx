import { useEffect } from "react";

export default function BandcampPlayer({ track }) {
  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== "https://bandcamp.com") return;

      console.log("BANDCAMP:", event.data);
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      style={{
        border: 0,
        width: "100%",
        height: "120px",
      }}
      src={track.embedUrl}
      title={`${track.artist} — ${track.title}`}
    />
  );
}
