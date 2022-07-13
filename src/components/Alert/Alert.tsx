import AlertProps from "@/@types/AlertProps";
import { Card, Text } from "@nextui-org/react";
import React from "react";

const Alert = ({ type, message }: AlertProps) => {
  return (
    <Card css={{ mt: 10, $$cardColor: `$colors$${type}` }} variant="bordered">
      <Card.Body>
        <Text h6 size={14} color="white" css={{ mt: 0 }}>
          {message}
        </Text>
      </Card.Body>
    </Card>
  );
};

export default Alert;
