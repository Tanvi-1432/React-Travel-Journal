import data from "../data";

export default function MainContent(props) {
    let dataLength = data.length;
  return (
    <main>
      <div className="main-content-container">
        <img src={`./images/${props.coverImg}`} className="location-image" />
        <div className="location-detail">
          <div className="location">
            <img src="./images/location-icon.png" />
            <span className="country">{props.location}</span>
            <span className="maps">
              <a href={props.map} target="_blank">
                View on Google Maps
              </a>
            </span>
          </div>
          <h2 className="place">{props.place}</h2>
          <p className="time">
            {props.startDate} - {props.endDate}
          </p>
          <p className="place-detail">{props.description}</p>
        </div>
      </div>
      {props.id !== dataLength && <hr />}
    </main>
  );
}
