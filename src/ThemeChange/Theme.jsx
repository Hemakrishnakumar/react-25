import useLocalStorage from "./useLocalStorage";

const Theme = () => {
  const [mode, setMode] = useLocalStorage("mode", "light");

  const primary = mode === "light" ? "#fff" : "#000";
  const second = mode !== "light" ? "#fff" : "#000";
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: second,
        background: primary,
        padding: "100px",
      }}
    >
      <h1 style={{ color: second }}>Hello World!</h1>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        style={{
          border: "none",
          marginTop: "20px",
          fontWeight: "bold",
          background: second,
          color: primary,
          borderRadius: "8px",
          padding: "10px 16px",
        }}
      >
        Change Theme
      </button>
    </div>
  );
};

export default Theme;
