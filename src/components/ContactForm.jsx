import React, { useState } from 'react';
import styled from 'styled-components';
import DubaiImg from "../assets/images/illustration1.jpg"

// Styled form container with a split layout
const FormWrapper = styled.div`
  display: flex;
  min-height: 500px;
  background-color: #f7f7f7;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
     max-height:502px ;
  }
`;

// Left side with background and image
const LeftSide = styled.div`
  flex: 1;
  background-color: #4F75B4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
  }
`;

// Right side containing the contact form
const RightSide = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Styled form elements
const FormTitle = styled.h2`
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #4F75B4;
    outline: none;
  }
`;

const TextAreaField = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    border-color: #4F75B4;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #FF8B8B;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FF5A5A;
  }
`;

// Success Message
const SuccessMessage = styled.div`
  text-align: center;
  color: #4F75B4;
  font-size: 18px;
  margin-top: 20px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate form submission to backend or email service.
    console.log('Form Submitted', formData);
  };

  return (
    <FormWrapper>
      <LeftSide>
        <img className='w-100' src={DubaiImg} alt="" />
        <div></div>
      </LeftSide>
      <RightSide>
        <FormTitle>Contact Us</FormTitle>
        {submitted ? (
          <SuccessMessage>
            <h3>Thank you for reaching out!</h3>
            <p>We will get back to you shortly.</p>
          </SuccessMessage>
        ) : (
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <TextAreaField
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
            />
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        )}
      </RightSide>
    </FormWrapper>
  );
};

export default ContactForm;
