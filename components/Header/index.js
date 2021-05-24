import React from "react";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className={styles.content}>
              <h2>Promova uma causa social</h2>
              <p>
                Você é uma agência ou profissional de marketing e comunicação?
                Seu talento pode <span>TRANSFORMAR VIDAS</span>
              </p>
              <a href="#saibaMais" className="shadow-sm rounded">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className={styles.image}>
              <img src="/assets/images/undraw-social.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
