export default function ShowUserName(props) {
  return (
    <div>
      <h2>O nome do usuário: {props.name || "Não informado"}</h2>
    </div>
  );
}
