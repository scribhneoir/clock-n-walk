import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../styled/text';
import Container from '../styled/container';
import Field from '../styled/field';
import Button from '../styled/button';

const Login = () => {
  const [code, setCode] = React.useState('');
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate('/new', { replace: true }),
    [navigate]
  );

  return (
    <>
      <Container>
        <Text weight={'900'} size='5rem'>
          clock n walk
        </Text>
      </Container>
      <Field name='code' placeholder='code' value={code} setValue={setCode} />
      <Button>join</Button>
      <Button onClick={handleOnClick}>new</Button>
    </>
  );
};

export default Login;
