import React from "react";
import { Card, Container } from "@nextui-org/react";

import styles from "./styles.module.css";

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <Card variant="bordered" className={styles.content}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default Content;
