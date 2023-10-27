function Showcase() {
  const favPokemon = "Snorlax";
  const pokeCharacteristics = {
    type: "Normal",
    move: "Tackle"
  };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <h2>
        Snorlax's type is {pokeCharacteristics.type} and one of their moves is{" "}
        {pokeCharacteristics.move}
      </h2>
    </div>
  );
}

export default Showcase;
