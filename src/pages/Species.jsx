import { useEffect, useState } from "react";

export default function Species() {
  const [loading, setLoading] = useState(false);
  const [species, setSpecies] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const [isPageChanged, setIsPageChanged] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchSpecies();
  }, []);

  const fetchSpecies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://swapi.dev/api/species/");
      const data = await response.json();
      setSpecies(data.results);
    } finally {
      setLoading(false);
    }
  };

  const handleSpeciesClick = async (species) => {
    try {
      setLoading(true);

      const response = await fetch(species.url);
      const data = await response.json();

      setSelectedSpecies(data);
      setIsPageChanged(true);
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    setSelectedSpecies(null);
    setIsPageChanged(false);
  };

  const filteredSpecies = species.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="penuh full">
      {loading ? (
        <div className="tengah1">Loading...</div>
      ) : isPageChanged ? (
        <div className="tengah bungkus2">
          <button onClick={handleGoBack}>Back</button>
          <h2>{selectedSpecies.name}</h2>
          <p>Average Height: {selectedSpecies.average_height}</p>
          <p>Skin Colors: {selectedSpecies.skin_colors}</p>
          <p>Language: {selectedSpecies.language}</p>
          <p>Eye colors: {selectedSpecies.eye_colors}</p>
          <p>Hair colors: {selectedSpecies.hair_colors}</p>
        </div>
      ) : (
        <>
          <div className="tengah">
            <h1>Daftar Spesies Star Wars</h1>
            <div>
              <input className="tinggi" type="text" placeholder="Cari spesies..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className="tengah full">
              {filteredSpecies.length > 0 ? (
                filteredSpecies.map((item) => (
                  <button key={item.name} onClick={() => handleSpeciesClick(item)} className="bungkus">
                    {item.name}
                  </button>
                ))
              ) : (
                <p className="besar">Tidak ada spesies yang cocok dengan pencarian Anda.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
