import React from "react";
import Select from "react-select";

import styles from "./styles.module.css";

const segments = [
  { value: "animais", label: "Animais" },
  { value: "familia", label: "família" },
  { value: "politica", label: "Política" },
  { value: "direitoCivis", label: "Direito Civis" },
];

const services = [
  { value: "designerGrafico", label: "Designer Gráfico" },
  { value: "midiasSociais", label: "Mídias Sociais" },
  { value: "wordpress", label: "WordPress" },
  { value: "redator", label: "Redator" },
  { value: "consultoria", label: "Consultoria" },
];

export default function Search() {
  return (
    <form className="row g-3">
      <div className="col-md-7 col-sm-12">
        <Select
          isMulti
          name="services"
          options={services}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder="Qual serviço gostaria de doar?"
        />
      </div>
      <div className="col-md-3 col-sm-12">
        <Select
          name="segments"
          options={segments}
          className="basic-select"
          classNamePrefix="select"
          placeholder="Escolha uma causa"
        />
      </div>
      <div className="col-md-2 col-sm-12">
        <button
          type="submit"
          className={[styles.submitButton, "btn btn-primary mb-3"].join(" ")}
        >
          Ajudar
        </button>
      </div>
    </form>
  );
}
