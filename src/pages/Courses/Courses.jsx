import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Courses.css";
const API_URL =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/courses26269ff.json";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setCourses(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);

        console.log(err);
      });
  }, []);

  return (
    <div className="courses__container">
      <h1 className="courses__title">Courses we offer</h1>
      <section className="courses">
        {isLoading && <div className="loading">Loading...</div>}
        {courses &&
          courses.map((course) => <Card key={course.id} course={course} />)}
      </section>
    </div>
  );
}
