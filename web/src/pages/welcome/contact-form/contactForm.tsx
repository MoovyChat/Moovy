import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useCreateMessageMutation } from '../../../generated/graphql';
import SpringModal from '../../admin/modal/BasicModal';

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

const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
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

const StyledInput = styled(Input)<{ hasError: boolean }>`
  border-color: ${props => (props.hasError ? 'red' : '#00204c')};
`;

const StyledTextArea = styled(TextArea)<{ hasError: boolean }>`
  border-color: ${props => (props.hasError ? 'red' : '#00204c')};
`;

const SubmitButton = styled.button`
  align-items: center;
  background-color: #00204c;
  color: white;
  padding: 10px;
  border-radius: 100px;
  display: flex;
  font: normal normal bold 14px/1.4em 'open sans', sans-serif;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: hsla(215, 100%, 15%, 0.14);
    color: black;
    transition: all 0.3s;
  }
  :active {
    background-color: #00204c;
    color: white;
  }
`;

interface FormValues {
  fname: string;
  mname: string;
  lname: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  fname?: string;
  lname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [_, createMessage] = useCreateMessageMutation();
  const [isMessageSent, setMessageSent] = useState<boolean>(false);

  const [formValues, setFormValues] = useState<FormValues>({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form fields
    const errors = validate(formValues);
    if (!Object.keys(errors).length) {
      const fullName = `${formValues.fname} ${
        formValues.mname ? formValues.mname + ' ' : ''
      }${formValues.lname}`.trim();

      // Only submit if there are no validation errors
      createMessage({
        name: fullName,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
      })
        .then(res => {
          const { error, data } = res;
          if (error) {
            alert('Failed to send message');
          }
          if (data) {
            setFormValues({
              fname: '',
              mname: '',
              lname: '',
              email: '',
              subject: '',
              message: '',
            });
          }
          setMessageSent(() => true);
        })
        .catch(() => {
          alert('Failed to send message');
        });
    } else {
      setErrors(errors);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
    // validate the changed input dynamically
    const error = validateField(name, value);
    if (error) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: error,
      }));
    } else {
      setErrors(prevErrors => {
        const { [name as keyof Errors]: _, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case 'fname':
        return value ? null : 'First Name is required';
      case 'lname':
        return value ? null : 'Last Name is required';
      case 'email':
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!value) {
          return 'Email is required';
        } else if (!emailPattern.test(value)) {
          return 'Invalid email address';
        } else {
          return null;
        }
      case 'subject':
        return value ? null : 'Subject is required';
      case 'message':
        return value ? null : 'Message is required';
      default:
        return null;
    }
  };

  const validate = (values: FormValues): Errors => {
    let errors: Errors = {};

    const fieldsToValidate = ['fname', 'lname', 'email', 'subject', 'message'];

    for (const field of fieldsToValidate) {
      const error = validateField(field, values[field as keyof FormValues]);
      if (error) {
        errors[field as keyof Errors] = error;
      }
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
            <label htmlFor="fname">First Name</label>
            <StyledInput
              type="text"
              id="fname"
              name="fname"
              value={formValues.fname}
              placeholder="First Name"
              onChange={handleChange}
              aria-describedby="fnameError"
              hasError={!!errors.fname}
            />
            {errors.fname && (
              <ErrorText id="fnameError">{errors.fname}</ErrorText>
            )}
          </div>
          <div>
            <label htmlFor="mname">Middle Name</label>
            <StyledInput
              type="text"
              id="mname"
              name="mname"
              value={formValues.mname}
              placeholder="Middle Name"
              onChange={handleChange}
              hasError={false}
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <StyledInput
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              value={formValues.lname}
              onChange={handleChange}
              aria-describedby="lnameError"
              hasError={!!errors.lname}
            />
            {errors.lname && (
              <ErrorText id="lnameError">{errors.lname}</ErrorText>
            )}
          </div>
        </Row>
        <div>
          <label htmlFor="email">Email</label>
          <StyledInput
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            aria-describedby="emailError"
            hasError={!!errors.email}
          />
          {errors.email && (
            <ErrorText id="emailError">{errors.email}</ErrorText>
          )}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <StyledInput
            type="text"
            id="subject"
            name="subject"
            value={formValues.subject}
            placeholder="Subject"
            onChange={handleChange}
            aria-describedby="subjectError"
            hasError={!!errors.subject}
          />
          {errors.subject && (
            <ErrorText id="subjectError">{errors.subject}</ErrorText>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <StyledTextArea
            id="message"
            name="message"
            rows={4}
            cols={50}
            value={formValues.message}
            placeholder="Leave us a message"
            onChange={handleChange}
            aria-describedby="messageError"
            hasError={!!errors.message}
          />
          {errors.message && (
            <ErrorText id="messageError">{errors.message}</ErrorText>
          )}
        </div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      <SpringModal
        open={isMessageSent}
        handleClose={() => {
          setMessageSent(() => false);
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Message Sent Successfully
        </div>
      </SpringModal>
    </FormWrapper>
  );
};

export default ContactForm;
