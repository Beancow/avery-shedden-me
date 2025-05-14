export default function Page() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage:
          "linear-gradient(to bottom, var(--accent-1), var(--accent-3))",
      }}
    >
      <h1>Avery's Website</h1>
      <p>
        This is a simple website built with Next.js. It is a work in progress,
        so please check back later for more updates!
      </p>
    </main>
  );
}
