import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ course }) {
  return (
    <Link
      style={{ textDecoration: "none", cursor: "pointer" }}
      to={{
        pathname: `/courses/${course.id}`,
        state: {
          course: course,
        },
      }}
    >
      <div className="card">
        <figure className="card__image__container">
          <img className="card__image" src={course.thumbnailURL} alt="card" />
        </figure>
        <h3 className="card__title">{course.title}</h3>
        <div className="card__details">
          <p className="card__author">Simplilearn Team</p>
          <p className="card__price">₹{course.price}/month</p>
        </div>
      </div>
    </Link>
  );
}
