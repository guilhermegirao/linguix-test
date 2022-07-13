import { Grid } from "@nextui-org/react";
import React, { BaseSyntheticEvent } from "react";

type FormProps = {
  onSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>;
  children: React.ReactNode;
};

const Form = ({ onSubmit, children }: FormProps) => {
  return <form {...{ onSubmit }}>{children}</form>;
};

export default Form;
