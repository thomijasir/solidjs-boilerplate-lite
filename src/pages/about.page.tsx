import { A } from "@solidjs/router";
import { Component, createEffect } from "solid-js";
import PageLayout from "../layouts/page.layout";

const AboutPage: Component<{}> = () => {

  createEffect(() => {
    console.log('HELLO ABOUT');
  })

  return <PageLayout><A href="/" class=" font-bold">Back</A> | This is About Page</PageLayout>;
};

export default AboutPage