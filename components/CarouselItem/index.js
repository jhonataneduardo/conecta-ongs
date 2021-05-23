import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./styles.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CarouselItem() {
  function Item() {
    return (
      <div className={[styles.item, "shadow-sm rounded"].join(" ")}>
        <div className={[styles.image, "shadow rounded"].join(" ")}>
          <img
            src="/assets/images/demo-identidade-visual.jpg"
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className={styles.itemTitle}>
          <h4>Designer Gráfico</h4>
        </div>
        <div className={styles.itemQty}>
          <div className={styles.qty}>
            <span>5</span>
          </div>
          <div className={styles.text}>
            <span>ONGs precisam desse serviço</span>
          </div>
        </div>
        <a
          href="#"
          className={[styles.itemButton, "shadow-sm rounded"].join(" ")}
        >
          Conhecer
        </a>
      </div>
    );
  }

  return (
    <Carousel responsive={responsive}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Carousel>
  );
}
