import React, {useState, useEffect} from 'react'

function HookCounter() {

  const [count, setCount] = useState(0)
  const [nom, setNom] = useState("redouane")

  // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    // Mettre à jour le titre du document en utilisant l'API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setNom("hamza")}>nom {nom}</button>
    </div>
  )
}

export default HookCounter