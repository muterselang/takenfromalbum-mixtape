export default function BandcampPlayer({ url }) {
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
