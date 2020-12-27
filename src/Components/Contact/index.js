import React, {Fragment} from "react";
import Footer from './../Footer'
import {
  FormSection,
  FormCenter,
  Title,
  Form,
  Input,
  InfoForm,
  Textarea,
  Button,
} from "./style.js";

const Contact = () => {
  return (
    <Fragment>
      <FormSection>
        <FormCenter className="container">
          <Title>drop me a line</Title>
          <Form action="">
            <InfoForm>
              <Input className="name" type="text" placeholder="Your Name" />
              <Input className="email" type="email" placeholder="Your Email" />
            </InfoForm>
            <Input className="subject" type="text" placeholder="Your Subject" />
            <Textarea
              className="message"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></Textarea>
            <Button className="btn">shoot message</Button>
          </Form>
        </FormCenter>
      </FormSection>
      <Footer />
    </Fragment>
  );
};

export default Contact;
