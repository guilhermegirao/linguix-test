import React from "react";

import styles from "./styles.module.css";

type FormGroupProps = {
  children: React.ReactNode;
};

const FormGroup = ({ children }: FormGroupProps) => {
  return <div className={styles.form_group}>{children}</div>;
};

export default FormGroup;
