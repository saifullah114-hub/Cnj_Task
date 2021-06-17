import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { MdEvent, MdDesktopMac } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { SiFreedesktopDotOrg } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import axios from "axios";
import EventCard from "./EventCard";

const Events = () => {
  const [event, setEvent] = useState("ALL_EVENTS");
  const [subevent, setSubEvent] = useState("Upcoming");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [eventsData, setEventsData] = useState(null);
  const [page, setPage] = useState(1);
  const [PAGE_COUNT, setPageCount] = useState(0);
  const [offset, setOffSet] = useState(0);

  const toggleTags = (tag) => {
    if (selectedTags.includes(tag)) {
      const indx = selectedTags.indexOf(tag);
      selectedTags.splice(indx, 1);
      setSelectedTags([...selectedTags]);
    } else {
      selectedTags.push(tag);
      setSelectedTags([...selectedTags]);
    }
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((prev) => prev - 1);
    setOffSet((prev) => prev - 20);
  };
  const nextPage = () => {
    if (page === PAGE_COUNT) {
      return;
    }
    setPage((prev) => prev + 1);
    setOffSet((prev) => prev + 20);
  };

  const fetchTags = async () => {
    try {
      const { data } = await axios.get(
        "https://api.codingninjas.com/api/v3/event_tags"
      );

      setTags([...data.data.tags]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchContent() {
      setEventsData(null);
      let url = `https://api.codingninjas.com/api/v3/events?event_category=${event}&event_sub_category=${subevent}&tag_list=${selectedTags.join()}&offset=${offset}`;
      try {
        const { data } = await axios.get(url);
        setEventsData(data.data.events);
        setPageCount(data.data.page_count);
      } catch (error) {
        console.log(error);
      }
    }
    fetchContent();
  }, [event, subevent, selectedTags, offset]);
  const HomeTitle = () => {
    return (
      <>
        <MdEvent /> All Events
      </>
    );
  };
  const WebinarTitle = () => {
    return (
      <>
        <MdDesktopMac /> Webinars
      </>
    );
  };
  const CodingTitle = () => {
    return (
      <>
        <AiOutlineCode /> Coding Events
      </>
    );
  };
  const BootcampTitle = () => {
    return (
      <>
        <SiFreedesktopDotOrg /> Bootcamp Events
      </>
    );
  };
  const WorkshopTitle = () => {
    return (
      <>
        <GiTeacher /> Workshop
      </>
    );
  };
  return (
    <Card id="tabs">
      <div className="nav-tabs">
        <li
          className={event === "ALL_EVENTS" ? "nav-link active" : "nav-link"}
          onClick={() => setEvent("ALL_EVENTS")}
        >
          <HomeTitle />
        </li>
        <li
          className={event === "WEBINAR" ? "nav-link active" : "nav-link"}
          onClick={() => setEvent("WEBINAR")}
        >
          <WebinarTitle />
        </li>
        <li
          className={event === "CODING_EVENT" ? "nav-link active" : "nav-link"}
          onClick={() => setEvent("CODING_EVENT")}
        >
          <CodingTitle />
        </li>
        <li
          className={
            event === "BOOTCAMP_EVENT" ? "nav-link active" : "nav-link"
          }
          onClick={() => setEvent("BOOTCAMP_EVENT")}
        >
          <BootcampTitle />
        </li>
        <li
          className={event === "WORKSHOP" ? "nav-link active" : "nav-link"}
          onClick={() => setEvent("WORKSHOP")}
        >
          <WorkshopTitle />
        </li>
      </div>
      <div className="nav-tabs-second">
        <li
          onClick={() => setSubEvent("Upcoming")}
          className={subevent === "Upcoming" ? "active" : ""}
        >
          Upcoming
        </li>
        <li
          onClick={() => setSubEvent("Archived")}
          className={subevent === "Archived" ? "active" : ""}
        >
          Archived
        </li>
        <li
          onClick={() => setSubEvent("ALL_TIME_FAVORITES")}
          className={subevent === "ALL_TIME_FAVORITES" ? "active" : ""}
        >
          All Time Favorites
        </li>
      </div>
      <div className="content">
        <Row>
          <Col md={9} className="event-container">
            <Row>
              {eventsData ? (
                eventsData.length > 0 ? (
                  eventsData.map((ev) => (
                    <EventCard ev={ev} key={ev.id} subevent={subevent} />
                  ))
                ) : (
                  <div className="no-events">
                    No events found with the selected tags
                  </div>
                )
              ) : null}
            </Row>
            {eventsData && PAGE_COUNT > 0 && (
              <div className="navigation-container">
                <div
                  className={page === 1 ? "nav-arrow disabled" : "nav-arrow"}
                  onClick={prevPage}
                >
                  <img
                    src="https://files.codingninjas.in/left-arrow-5581.svg"
                    alt="prev"
                  />
                </div>
                <div className="page-container">
                  Page {page} of {PAGE_COUNT}
                </div>
                <div
                  className={
                    page === PAGE_COUNT ? "nav-arrow disabled" : "nav-arrow"
                  }
                  onClick={nextPage}
                >
                  <img
                    src="https://files.codingninjas.in/right-arrow-5582.svg"
                    alt="next"
                  />
                </div>
              </div>
            )}
          </Col>
          <Col md={3} className="tags">
            <p>Tags</p>
            <div className="tags-wrapper">
              {tags.length > 0 &&
                tags.map((tag) => (
                  <div
                    className={
                      selectedTags.includes(tag) ? "tag selected" : "tag"
                    }
                    key={tag}
                    onClick={() => toggleTags(tag)}
                  >
                    {tag}
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default Events;
