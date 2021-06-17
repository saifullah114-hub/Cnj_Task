import React from "react";
import { Col } from "react-bootstrap";
import Moment from "react-moment";
const EventCard = ({ ev, subevent }) => {
  let today = new Date();
  let regDate = new Date(ev.registration_end_time);
  let registrationOpen = regDate > today ? true : false;

  return (
    <Col md={6}>
      <div className="event-card">
        <div className="header">
          <div className="img-container">
            <div className="glass"></div>
            <img src={ev.cover_picture} alt="" />
          </div>
          {subevent !== "Archived" && (
            <div className="event-status">
              <div className="event-status-container">
                {registrationOpen ? (
                  <>
                    <div className="circle"></div>
                    <p>
                      {" "}
                      Registrations <b>open</b> till{" "}
                      <b>
                        <Moment format="hh:mm A, D MMM YYYY">
                          {new Date(ev.registration_end_time)}
                        </Moment>
                      </b>
                    </p>
                  </>
                ) : (
                  <p>
                    {" "}
                    Registrations <b>closed</b>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="main">
          <p className="event-name">{ev.name}</p>
          <div className="details">
            <div className="info-item">
              <p className="item-label">
                <b>Starts On</b>
              </p>
              <p className="item-value">
                <Moment format="hh:mm A, D MMM YYYY">
                  {new Date(ev.event_start_time)}
                </Moment>
              </p>
            </div>
            <div className="info-item price">
              <p className="item-label">
                <b>Entry Fee</b>
              </p>
              <p className="item-value">
                {ev.fees > 0 ? `${ev.currency} ${ev.fees}` : "Free"}
              </p>
            </div>
            <div className="info-item price">
              <p className="item-label">
                <b>Venue</b>
              </p>
              <p className="item-value">{ev.venue}</p>
            </div>
          </div>
          <div className="desc">{ev.short_desc}</div>
          <div className="tags-container">
            {ev.card_tags.length > 0 &&
              ev.card_tags.map((tag) => <div className="tag">{tag}</div>)}
          </div>
        </div>
        <div className="footer">
          <div className="registered-users">
            <div id="profile-img-container">
              {ev.registered_users.top_users.length > 0 &&
                ev.registered_users.top_users.map((user) => (
                  <div className="mat-tooltip-trigger user-image">
                    <img src={user.image_url} alt="" />
                  </div>
                ))}
            </div>
            {ev.registered_users.other_users_count &&
              ev.registered_users.other_users_count > 0 && (
                <p className="count">
                  {" "}
                  and <b>{ev.registered_users.other_users_count}</b> others
                  registered{" "}
                </p>
              )}
          </div>
          {registrationOpen && (
            <div className="status d-flex">
              <img
                src="https://files.codingninjas.in/0000000000001272.png"
                height="30px"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};

export default EventCard;
