const Card = (props: any) => {
  const { country } = props;
  console.log(country);

  return (
    <li className="card">
        <img src={country.flags.png} alt="" />
        <div className="data-container">
            <ul>
                <li>{country.name.common}</li>
                <li>{country.capital}</li>
                <li>Pop . {country.population}</li>
            </ul>
        </div>
    </li>
  );
};

export default Card;
