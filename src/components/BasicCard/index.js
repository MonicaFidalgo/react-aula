import "./basic-card.css";

function BasicCard(props) {
  return (
    <div className="basic-card" id={props.id}>
      <img src={props.imgPath} className="basic-card__img" alt={props.alt} />
      <div className="basic-card__body">
        {props.date && <span>{props.date}</span>}
        <h5>{props.title}</h5>
        <p className="basic-card__description">{props.description}</p>
        <a href={props.url}>{props.link}</a>
      </div>
    </div>
  );
}

export default BasicCard;
