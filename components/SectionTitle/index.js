import React from "react";

import styles from "./styles.module.css";

export default function SectionTitle({ ...props }) {
  return (
    <div>
      <div className={styles.sectionTitle}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
