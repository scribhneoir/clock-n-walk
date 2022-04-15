import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../styled/text';
import Container from '../styled/container';
import Field from '../styled/field';
import Button from '../styled/button';
import Logo from '../styled/logo';

const Login = () => {
  const [code, setCode] = React.useState('');
  const [email, setEmail] = React.useState('');
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    dir => navigate(dir, { replace: true }),
    [navigate]
  );

  return (
    <>
      <Container noBorder>
        <Logo />
      </Container>
      <Container>
        <Field
          name='email'
          placeholder='email'
          value={email}
          setValue={setEmail}
        />
        <Field name='code' placeholder='code' value={code} setValue={setCode} />
      </Container>
      <Container noBorder row>
        <Button
          onClick={() => {
            handleOnClick('/schedule');
          }}
        >
          join
        </Button>
        <Button
          onClick={() => {
            handleOnClick('/new');
          }}
        >
          new
        </Button>
      </Container>
    </>
  );
};

export default Login;
