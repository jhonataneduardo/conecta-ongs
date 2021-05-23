import React from "react";

import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <img src="/assets/images/logo-conecta-ongs.png" alt="" />
      </footer>
      <div className={styles.copyright}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>© 2021 Conecta ONGs. Todos os direitos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
