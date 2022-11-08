import { setTimeout } from 'timers';

import React, { useState } from 'react';

import { FaRegEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

// import { phoneMask } from '../../utils/mask';
import Input from '../Input';
import {
  Container,
  // Loading,
  Title,
  TitleLines,
  GridInputs,
  Button,
  BoxSuccess,
} from './styles';

const ContactForm: React.FC = () => {
  // const [phone, setPhone] = useState('');
  // const [loading, setLoading] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);

  // const handleSubmit = useCallback(
  //   (event) => {
  //     event.preventDefault();
  //     const data = {
  //       name: event.target[0].value,
  //       email: event.target[1].value,
  //       phone,
  //       company: event.target[3].value,
  //       message: event.target[4].value,
  //     };
  //     setLoading(true);
  //     fetch('/api/contact', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(data),
  //     }).then((res) => {
  //       if (res.ok) {
  //         setLoading(false);
  //         setSuccessSubmit(true);
  //       }
  //     });
  //   },
  // [phone]
  // );

  const sucSub = () => {
    setSuccessSubmit(true);
    setTimeout(() => {
      setSuccessSubmit(false);
    }, 3000);
  };

  return (
    <Container>
      {/* {loading && <Loading />} */}

      <Title>
        <h1 className="text-sky-900 text-3xl">Mail to RF3i</h1>
        <div>
          <TitleLines>
            <span />
            <span />
            <span />
          </TitleLines>
          <FaRegEnvelope color={'#1e3a8a'} />
        </div>
      </Title>
      {!successSubmit && (
        <form
          // onSubmit={handleSubmit}
          onSubmit={sucSub}
        >
          <GridInputs>
            <Input
              className="bg-white"
              name="name"
              label="Name*"
              type="text"
              placeholder="Group RF3i"
              style={{ outline: 'none' }}
              required
            />
            <Input
              className="bg-white"
              name="email"
              label="Email*"
              type="email"
              placeholder="labrf3i@gmail.com"
              style={{ outline: 'none' }}
              required
            />
            <Input
              className="bg-white"
              name="phone"
              label="Phone number"
              type="text"
              placeholder="(+84)"
              // value={phone}
              maxLength={15}
              // onChange={(e) => setPhone(phoneMask(e.target.value))}
              style={{ outline: 'none' }}
            />
            <Input
              className="bg-white"
              name="company"
              label="Company"
              type="text"
              placeholder="HUST"
              style={{ outline: 'none' }}
            />
          </GridInputs>
          <Input
            className="bg-white"
            name="message"
            label="Message*"
            type="text"
            placeholder="Hi RF3i!"
            style={{ outline: 'none' }}
            required
          />

          <Button
            type="submit"
            style={{ background: '#1e3a8a', marginTop: '20px' }}
          >
            Send to us <FaPaperPlane />
          </Button>
        </form>
      )}
      <BoxSuccess active={successSubmit}>
        <FaCheckCircle />
        <h1>Send successed</h1>
      </BoxSuccess>
    </Container>
  );
};

export default ContactForm;
