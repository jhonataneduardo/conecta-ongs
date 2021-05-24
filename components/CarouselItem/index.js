import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

import styles from "./styles.module.css";

export default function CarouselItem() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const resp = await axios.get("https://conecta-ongs.vercel.app/api/jobs");
      console.log(resp.data);
      setJobs(resp.data);
    };
    getJobs();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function Item(props) {
    return (
      <div className={[styles.item, "shadow-sm rounded"].join(" ")}>
        <div className={styles.itemImage}>
          <img src={props.image} alt="" className="mx-auto d-block" />
        </div>
        <div className={styles.content}>
          <div className={styles.itemTitle}>
            <h2>{props.title}</h2>
          </div>
          <div className={styles.itemQty}>
            <div className={styles.qty}>{props.quantity}</div>
            <div className={styles.text}>ONGs precisam desse serviço</div>
          </div>
          <div className={styles.itemButton}>
            <a href="#">Conhecer</a>
          </div>
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {jobs.map((job) => (
          <div key={job.id}>
            <Item title={job.title} image={job.image} quantity={job.quantity} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
