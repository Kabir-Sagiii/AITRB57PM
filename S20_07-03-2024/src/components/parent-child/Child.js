function Child({ data }) {
  return (
    <div
      style={{
        width: "400px",
        padding: "10px",
        textAlign: "center",
        margin: "30px auto",
        boxShadow: "0 0 10px green",
      }}
    >
      <h2>Child Component</h2>
      <p>{data}</p>
    </div>
  );
}

export default Child;
