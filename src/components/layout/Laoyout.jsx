import "./layout.scss";

function Laout({ children }) {
  return (
    <div className="layout">
      <div className="container">{children}</div>
    </div>
  );
}

export default Laout;
