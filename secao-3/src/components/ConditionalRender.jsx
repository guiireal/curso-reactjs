import { useState } from "react";

export default function ConditionalRender() {
  const [x] = useState(true);
  const [y] = useState(false);

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      {y ? <p>Se y for true, sim!</p> : <p>Agora y é falso!</p>}
    </div>
  );
}
