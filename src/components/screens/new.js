import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../styled/text';
import Container from '../styled/container';
import Field from '../styled/field';
import Button from '../styled/button';
import { IoCaretBack } from 'react-icons/io5';
import { FaMinus } from 'react-icons/fa';

const New = () => {
  const [staff, setStaff] = React.useState(['']);
  const setStaffMember = (index, name) => {
    const newStaff = [...staff];
    newStaff[index] = name;
    setStaff(newStaff);
  };
  const removeStaffMember = index => {
    console.log(index);
    const newStaff = [...staff];
    newStaff.splice(index, 1);
    setStaff(newStaff);
  };
  const navigate = useNavigate();
  const goBack = useCallback(
    () => navigate('/', { replace: true }),
    [navigate]
  );
  return (
    <>
      <Container
        button
        buttonText={<IoCaretBack size='1.5rem' />}
        onClick={goBack}
      >
        <Text weight={'900'} size='5rem'>
          new staff
        </Text>
      </Container>
      {staff.map((s, index) => {
        return (
          <Container
            button={index}
            buttonText={<FaMinus size='1rem' />}
            onClick={() => {
              removeStaffMember(index);
            }}
          >
            <Field
              name={'staff' + index}
              placeholder='name'
              value={s}
              setValue={name => {
                setStaffMember(index, name);
              }}
            />
          </Container>
        );
      })}
      <Button
        onClick={() => {
          setStaff([...staff, '']);
        }}
      >
        +
      </Button>
      <Button>done</Button>
    </>
  );
};

export default New;
