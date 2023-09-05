import "./Card.css";

function Card(props) {
  console.log(props);
  return (
    <div className="Card--wrapper">
      <img
        src={props.imageUrl}
        alt=""
        className="Card--image"
      />
      <div className="Card--info-wrapper">
        <div className="Card--location--wrapper">
          <img
            src="./images/location.svg"
            alt=""
            className="Card--location--icon"
          />
          <p className="Card--location--text">{props.location}</p>
          <a
            href={props.googleMapsUrl}
            className="Card--location--link"
          >
            View on Google Maps
          </a>
        </div>

        <h3 className="Card--name">{props.title}</h3>
        <h4 className="Card--dates">
          {props.startDate} - {props.endDate}
        </h4>
        <p className="Card--text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
