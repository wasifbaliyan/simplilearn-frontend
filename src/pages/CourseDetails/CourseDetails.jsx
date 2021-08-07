import React from "react";
import { useLocation } from "react-router-dom";
import "./CourseDetails.css";

export default function CourseDetails() {
  const location = useLocation();
  const { course } = location.state;
  const getYoutubeId = (link) => {
    return link.split(".be/")[1];
  };

  return (
    <div className="course__details">
      <h1 className="course__title">{course.title}</h1>
      <section className="course__videos">
        {course.videoLink.map((url) => (
          <div className="video__container">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${getYoutubeId(url)}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
