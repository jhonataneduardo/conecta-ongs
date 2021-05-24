import React from "react";

import styles from "./styles.module.css";

export default function NavTop() {
  return (
    <nav>
      <div className="container ">
        <div className="row justify-content-between navTop">
          <div className="col-md-5">
            <div className={styles.menu}>
              <ul className={styles.menuLinks}>
                <li className={styles.menuItem}>
                  <a href="#">Quem Somos</a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#">Seja um parceiro</a>
                </li>
                <li className={styles.menuItem}>
                  <a href="#">Contatos</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2 col-sm-12">
            <div className={styles.logo}>
              <img src="/assets/images/logo-conecta-ongs.png" alt="" />
            </div>
          </div>

          <div className="col-5">
            <div className={styles.app}>
              <ul className={styles.appLinks}>
                <li
                  className={[styles.linkLogin, "shadow-sm rounded"].join(" ")}
                >
                  <a href="#">Login</a>
                </li>
                <li
                  className={[styles.linkSignup, "shadow-sm rounded"].join(" ")}
                >
                  <a href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
