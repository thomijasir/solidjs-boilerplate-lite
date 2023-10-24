import { A } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import PageLayout from "../layouts/page.layout";

const LoginPage: Component<{}> = () => {

  createEffect(() => {
    console.log('HELLO LOGIN');
  })

  return <PageLayout><A href="/" class=" font-bold">Back</A> | This is Login Page</PageLayout>;
};

export default LoginPage