import { useState, useEffect } from "react";

const Char = () => {
  const [speciesData, setSpeciesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSpecies = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/species/");
      const data = await response.json();
      setSpeciesData(data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSpecies();
  }, []);

  const Character = ({ url }) => {
    const [characterData, setCharacterData] = useState(null);

    useEffect(() => {
      fetchCharacter();
    }, []);

    const fetchCharacter = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacterData(data);
      } catch (error) {
        console.error(error);
      }
    };

    return <div>{characterData && <p>{characterData.name}</p>}</div>;
  };

  return (
    <div className="penuh full">
      <div className="full">
        {loading ? (
          <p className="tengah1">Loading...</p>
        ) : (
          <>
            <h1 className="tengah2">Star Wars Species Characters</h1>

            {speciesData.map((species) => (
              <div className="bungkus3 tengah" key={species.name}>
                <h3>{species.name}</h3>

                <h4>Characters:</h4>
                {species.people.map((characterUrl) => (
                  <Character key={characterUrl} url={characterUrl} />
                ))}
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Char;
