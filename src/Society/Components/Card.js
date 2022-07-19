import { editEvent, deleteEvent } from '../SocietyPage'

function Card(props) {
  return (
    <div className="card">

      <div className="content">
        <div className="images">
          <div className="image">
            <img src="" alt="logo" />
          </div>
          <div className="icons">
            <div className="material-icons"><button  /*onClick={() => deleteEvent(e)}*/>close</button></div>
            <div className="material-icons"><button  /*onClick={() => editEvent({ soc : e.soc, eventName, date, time, approved })}*/>edit</button></div>
          </div>
        </div>

        <div className="info">
          <h2>{props.soc}</h2>
          <h1>Event: {props.EventName}</h1>
          <h1>Date: {props.date}</h1>
          <h1>Time: {props.time}</h1>
          <h1>Approved: {props.approved}</h1>
        </div>
      </div>
      <button>Register Now</button>
    </div>
  );
}

export default Card;
