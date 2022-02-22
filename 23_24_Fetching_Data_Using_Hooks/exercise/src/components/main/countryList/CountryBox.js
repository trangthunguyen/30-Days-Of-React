import '../../../styles/components/main/countryBox/CountryBox.scss'

const CountryBox = (props) => {
  const { country: {name, capital, languages , population, flag} } = props;
  return (
    <div className="country-box">
      <div className="country-box-title">
        <div className='img-container'>
        <img src={flag} alt={name} />
        </div>
        <p>{name}</p>
      </div>
      <p>
        <strong>Capital: </strong>
        {capital}
      </p>
      <p>
        <strong>Language: </strong>
        {Array.isArray(languages) ? languages.map(item => <span key={item.name}>{item.name}, </span>) : ''}
      </p>
      <p>
        <strong>Population: </strong>
        {population}
      </p>
      <p>
        <strong>Currency: </strong>
      </p>
    </div>
  );
};

export default CountryBox