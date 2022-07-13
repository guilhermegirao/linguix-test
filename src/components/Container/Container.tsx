import React from "react";
import { Container } from "@nextui-org/react";

import styles from "./styles.module.css";

type AppContainerProps = {
  children: React.ReactNode;
};

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <Container
      className={styles.container}
      display="flex"
      justify="center"
      alignItems="center"
      fluid
    >
      {children}
    </Container>
  );
};

export default AppContainer;
