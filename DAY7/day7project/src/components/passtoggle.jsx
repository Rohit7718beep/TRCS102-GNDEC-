

import { useState } from "react";

function Passtoggle() {
  const [password, setPassword] = useState("");
  const [passvisible, setpassvisible] = useState(false);

  return (
    <>
      <input
        type={passvisible ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={() => setpassvisible(!passvisible)}>
        {passvisible ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default Passtoggle;