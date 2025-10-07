import "./InfoPanel.css";

export default function InfoPanel({ planeta, onClose }) {
  if (!planeta) return null;
  return (
    <div className="panel">
      <button className="close" onClick={onClose}>×</button>
      <h2>{planeta.name}</h2>
      <p>{planeta.description}</p>
    </div>
  );
}
