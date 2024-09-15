import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

function List() {
  const [starships, setStarships] = useState([]);
  const [filteredStarships, setFilteredStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results);
        setFilteredStarships(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API fetch hatası:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = starships.filter(
      (starship) =>
        starship.name.toLowerCase().includes(query.toLowerCase()) ||
        starship.model.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredStarships(filtered);
  };

  const handleCardClick = (id) => {
    navigate(`/starship/${id}`);
  };

  return (
    <section>
      <Search onSearch={handleSearch} />
      <div className="cards-container">
        {loading ? (
          <p>Yükleniyor...</p>
        ) : filteredStarships.length > 0 ? (
          <div className="cards-grid">
            {filteredStarships.map((starship, index) => (
              <div
                className="card"
                key={index}
                onClick={() => handleCardClick(index + 1)}
              >
                <img
                  src={"./img/starship.png"}
                  alt={starship.name}
                  className="card-img"
                />
                <div className="card-content">
                  <h2 className="card-title">{starship.name}</h2>
                  <p className="card-text">
                    <span className="info-line">
                      <strong>Model: </strong>
                      {starship.model}
                    </span>{" "}
                    <br />
                    <span className="info-line">
                      <strong>Hyperdrive Rating: </strong>
                      {starship.max_atmosphering_speed} km/s
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Arama kriterlerine uygun gemi bulunamadı.</p>
        )}
      </div>
    </section>
  );
}

export default List;
