import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Loading } from "@nextui-org/react";

import Form from "@/components/Form/Form";
import FormGroup from "@/components/Form/FormGroup";
import Alert from "@/components/Alert/Alert";

import signinSchema from "@/validators/signin";
import SigninData from "@/@types/SigninData";
import UsersService from "@/services/UsersService";
import AlertProps from "@/@types/AlertProps";

const SigninForm = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const { register, handleSubmit, formState } = useForm<SigninData>({
    resolver: yupResolver(signinSchema),
    mode: "onChange",
  });

  useEffect(() => {
    setButtonDisabled(!formState.isValid);
  }, [formState]);

  const onSubmit = useCallback(async (data: SigninData) => {
    setLoading(true);
    setAlert(null);

    try {
      const signedUser = await UsersService.signin(data);

      if (signedUser.authorized) {
        setAlert({
          type: "primary",
          message: `Welcome, ${signedUser.userData.fullName}!`,
        });
      } else {
        setAlert({ type: "error", message: signedUser.message });
      }
    } catch (error: any) {
      console.error(error);
    }

    setLoading(false);
  }, []);

  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Input
            type="email"
            label="E-mail"
            animated={false}
            helperText={
              formState.errors.email
                ? String(formState.errors?.email?.message)
                : ""
            }
            helperColor="error"
            required
            {...register("email")}
          />
        </FormGroup>
        <FormGroup>
          <Input.Password
            type="password"
            label="Password"
            animated={false}
            helperText={
              formState.errors.password
                ? String(formState.errors?.password?.message)
                : ""
            }
            helperColor="error"
            required
            {...register("password")}
          />
        </FormGroup>
        <FormGroup>
          <Button
            type="submit"
            css={{ width: "100%" }}
            disabled={buttonDisabled || isLoading}
          >
            {!isLoading ? (
              "Sign-in"
            ) : (
              <Loading color="currentColor" size="sm" />
            )}
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default SigninForm;
