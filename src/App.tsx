import React, { useState } from 'react';
import './App.css';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
}

function App() {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchPokemon = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setPokemon(null);

    if (!query.trim()) {
      setError('Please enter a Pokémon name.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
      );

      if (!response.ok) {
        setError('Pokémon not found.');
        setLoading(false);
        return;
      }

      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>🎮 Pokémon Finder</h1>
        <p>Search for any Pokémon by name or number</p>
      </header>

      <main>
        <form onSubmit={searchPokemon}>
          <label htmlFor="search">Search Pokémon:</label>
          <input
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., pikachu or 25"
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {pokemon && (
          <article className="pokemon-card">
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img 
              src={pokemon.sprites.front_default} 
              alt={pokemon.name}
            />

            <section>
              <h3>Types:</h3>
              <ul>
                {pokemon.types.map((t) => (
                  <li key={t.type.name}>{t.type.name}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3>Abilities:</h3>
              <ul>
                {pokemon.abilities.map((a) => (
                  <li key={a.ability.name}>{a.ability.name}</li>
                ))}
              </ul>
            </section>
          </article>
        )}

        {!pokemon && !loading && !error && (
          <div className="welcome">
            <p>Enter a Pokémon name or number (1-1025) to get started!</p>
            <p>Try: pikachu, charizard, mewtwo, 1, 25, 150</p>
          </div>
        )}
      </main>

      <footer>
        <p>Data from <a href="https://pokeapi.co" target="_blank" rel="noopener noreferrer">PokéAPI</a></p>
        <p>Built with React + TypeScript</p>
      </footer>
    </div>
  );
}

export default App;