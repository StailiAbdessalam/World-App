import axios from "axios";
import Card from "./Card";
import { useState, useEffect } from "react";

const Contries = () => {
  const [data, setData]: any = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country: any) => (
          <Card country={country}  key={country.name.common}/>
        ))}
      </ul>
    </div>
  );
};

export default Contries;
