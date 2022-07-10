import axios from "axios";
import Card from "./Card";
import { useState, useEffect } from "react";

const Contries = () => {
  const [data, setData]: any = useState([]);
  const [sortedData, setSortedData]: any = useState([]);
  const [playOnce, settPlayOnce]: any = useState(true);
  const [rangeValue, setRangeValue]: any = useState(40);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
  useEffect(() => {
    if (playOnce) {
      axios.get("https://restcountries.com/v3.1/all").then((res) => {
        setData(res.data);
        settPlayOnce(false);
      });
    }

    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);
      const sortedArray = countryObj.sort((a, b) => {
        return b.population - a.population;
      });
      sortedArray.length = rangeValue;
      setSortedData(sortedArray);
    };
    sortedCountry();
  }, [data, playOnce, rangeValue]);

  return (
    <div className="countries">
      <div className="sort-container">
        {/* <label htmlFor="">{rangeValue}</label> */}
        <input
          type="range"
          min="1"
          max="255"
          value={rangeValue}
          onChange={(e: any) => setRangeValue(e.target.value)}
        />
        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  checked={radio == selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />

                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cancel">
        {selectedRadio && (
          <h5 onClick={(e) => setSelectedRadio("")}>Annuler recherche</h5>
        )}
      </div>
      <ul className="countries-list">
        {sortedData
          .filter((country: any) => country.region.includes(selectedRadio)
          )
          .map((country: any) => (
            <Card country={country} key={country.name.common} />
          ))}
      </ul>
    </div>
  );
};

export default Contries;
