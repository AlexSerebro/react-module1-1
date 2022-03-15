import './Alert.module.css';

function Alert({ text }) {
  return (
    <p role="alert" className="Alert">
      {text}
    </p>
  );
}

export default Alert;
