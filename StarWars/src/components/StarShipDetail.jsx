import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function StarshipDetail() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://swapi.dev/api/starships/${id}/`)

      .then((response) => response.json())
      .then((data) => {
        setStarship(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API fetch hatası:", error);
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div>
        <button className="btn" onClick={() => navigate("/")}>
          {" "}
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
      <div className="detail-container">
        {loading ? (
          <p>Yükleniyor...</p>
        ) : starship ? (
          <div className="starship-detail">
            <h1>{starship.name}</h1>

            <img src={"/img/starship.png"} width={300} height={100} />
            <div className="details-text">
              <p>
                <strong>Model: </strong>
                {starship.model}
              </p>
              <p>
                <strong>Passenger: </strong>
                {starship.passengers}
              </p>
              <p>
                <strong>Max Atmospheric Speed: </strong>
                {starship.max_atmosphering_speed} km/h
              </p>
              <p>
                <strong>Cargo Capacity: </strong>
                {starship.cargo_capacity}
              </p>
              <p>
                <strong>Manufacturer: </strong>
                {starship.manufacturer}
              </p>
              <p>
                <strong>Cost in Credits: </strong>
                {starship.cost_in_credits}
              </p>
              <p>
                <strong>Hyperdrive Rating: </strong>
                {starship.hyperdrive_rating}
              </p>
            </div>
          </div>
        ) : (
          <p>Gemi bulunamadı.</p>
        )}
      </div>
    </>
  );
}

export default StarshipDetail;
