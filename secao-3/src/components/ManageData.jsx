import { useState } from "react";

export default function ManageData() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Mudar valor</button>
      </div>
    </div>
  );
}
