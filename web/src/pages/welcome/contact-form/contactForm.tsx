import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  gap: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  background-color: #ffffff;
  border-color: rgb(227, 227, 227);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 0 0 transparent;
  box-sizing: border-box !important;
  direction: ltr;
  font: normal normal normal 15px/1.4em 'open sans', sans-serif;
  margin: 0;
  max-width: 100%;
  min-height: 60px;
  padding: 3px 3px 3px 10px;
  text-align: left;
  text-overflow: ellipsis;
  width: 100%;
  border-color: #00204c;
`;

const TextArea = styled.textarea`
  flex: 1;
  background-color: #ffffff;
  border-color: rgb(227, 227, 227);
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  color: #00204c;
  font: normal normal normal 15px/1.4em 'open sans', sans-serif;
  padding: 3px 3px 3px 10px;
  text-align: left;
  text-overflow: ellipsis;
  width: 100%;
  border-color: #00204c;
  box-sizing: border-box !important;
  min-height: 60px;
`;

const SubmitButton = styled.input`
  align-items: center;
  background-color: #00204c;
  color: white;
  padding: 10px;
  border-radius: 100px;
  display: flex;
  font: normal normal bold 14px/1.4em 'open sans', sans-serif;
  justify-content: center;
`;

interface FormValues {
  fname: string;
  mname: string;
  lname: string;
  subject: string;
  message: string;
}

interface Errors {
  fname?: string;
  lname?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    fname: '',
    mname: '',
    lname: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors(validate(formValues));
  };

  const validate = (values: FormValues): Errors => {
    let errors: Errors = {};

    if (!values.fname) {
      errors.fname = 'First Name is required';
    }

    if (!values.lname) {
      errors.lname = 'Last Name is required';
    }

    if (!values.subject) {
      errors.subject = 'Subject is required';
    }

    if (!values.message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  return (
    <FormWrapper>
      <h2>Get in Touch</h2>
      <p>
        We would love to hear from you! Reach out to us for any inquiries or
        feedback you may have.
      </p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <div>
            <Input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              onChange={handleChange}
            />
            {errors.fname && <p>{errors.fname}</p>}
          </div>
          <Input
            type="text"
            id="mname"
            name="mname"
            placeholder="Middle Name"
            onChange={handleChange}
          />
          <div>
            <Input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              onChange={handleChange}
            />
            {errors.lname && <p>{errors.lname}</p>}
          </div>
        </Row>
        <div>
          <Input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>
        <div className="text-area-container">
          <TextArea
            id="message"
            name="message"
            rows={4}
            cols={50}
            placeholder="Leave us a message"
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <SubmitButton type="submit" value="Submit" />
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;
