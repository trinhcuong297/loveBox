import React from 'react';

import Head from 'next/head';

import ContactForm from '../../component/ContactForm';
import ContactInformation from '../../component/ContactInformation';
import { Container, Content } from '../../styles/Home';

const ContactUs: React.FC = () => (
  <>
    <Head>
      <title>RF3i - Contact Us</title>
    </Head>
    <Container className="bg-gray-100 flex justify-center h-max">
      <Content className="w-max">
        <ContactForm />
        <ContactInformation />
      </Content>
    </Container>
  </>
);

export default ContactUs;
