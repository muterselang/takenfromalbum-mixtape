import { useEffect } from "react";

export default function BandcampPlayer({ url }) {
  useEffect(() => {
    function handleMessage(event) {
      if (event.origin !== "https://bandcamp.com") return;

      console.log("========== BANDCAMP MESSAGE ==========");
      console.log("origin:", event.origin);
      console.log("data:", event.data);
      console.log("type:", typeof event.data);
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
      src={url}
      title="Bandcamp player"
    />
  );
}
