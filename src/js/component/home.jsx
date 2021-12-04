import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
  const [inputField, setInputField] = useState("");
  const [tasks, setTasks] = useState([]);
  const [pokemones, setPokemones] = useState([]);

  // FETCH CON .then y.catch
  useEffect(() => {
    /*  fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error)); */
  }, []);

  // FETCH CON ASYNC-AWAIT
  useEffect(() => {
    // getPokemones();
  }, []);

  const getPokemones = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon", {
      method: "PUT",
      body: JSON.stringify([1, 2, 3, 4]),
    });
    const data = await response.json();
    console.log(data);
    setPokemones(data.results);
  };

  const addTaskHandler = () => {
    setTasks((estadoPrevio) => {
      return [...estadoPrevio, inputField];
    });
    setInputField("");
  };

  const inputChangeHandler = (evento) => {
    setInputField(evento.target.value);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <input
            onChange={inputChangeHandler}
            type="text"
            placeholder="Ingrese nueva tarea"
            value={inputField}
          />
          <button onClick={addTaskHandler}>Agregar</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Lista de tareas</h1>
          <ul>
            {tasks.map((task, indice) => {
              return <li key={indice}>{task}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Lista de Pokemones</h1>
          <ul>
            {pokemones.length > 0 ? (
              pokemones.map((pokemon, indice) => {
                return <li key={indice}>{pokemon.name}</li>;
              })
            ) : (
              <p>Cargando pokemones...</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
