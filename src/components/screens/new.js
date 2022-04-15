import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../styled/text';
import Container from '../styled/container';
import Field from '../styled/field';
import Button from '../styled/button';
import { IoCaretBack } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';

const New = () => {
  const [staff, setStaff] = React.useState([{ name: '', email: '' }]);
  const setStaffMember = (index, name, email) => {
    const newStaff = [...staff];
    if (name) newStaff[index].name = name;
    else if (email) newStaff[index].email = email;
    setStaff(newStaff);
  };
  const removeStaffMember = index => {
    console.log(index);
    const newStaff = [...staff];
    newStaff.splice(index, 1);
    setStaff(newStaff);
  };
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    dir => navigate(dir, { replace: true }),
    [navigate]
  );
  return (
    <>
      <Container
        button
        buttonText={<IoCaretBack size='1.5rem' />}
        onClick={() => {
          handleOnClick('/');
        }}
      >
        <Text weight={'900'} size='5rem'>
          new staff
        </Text>
      </Container>
      {staff.map((s, index) => {
        return (
          <>
            {index === 0 ? (
              <Container noBorder>
                <Text>SRA</Text>
              </Container>
            ) : index === 1 ? (
              <Container noBorder>
                <Text>RAs</Text>
              </Container>
            ) : (
              <></>
            )}
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
                value={s.name}
                setValue={name => {
                  setStaffMember(index, name, '');
                }}
              />
              <Field
                name={'email' + index}
                placeholder='email'
                value={s.email}
                setValue={email => {
                  setStaffMember(index, '', email);
                }}
              />
            </Container>
          </>
        );
      })}
      <Container noBorder row>
        <Button
          onClick={() => {
            setStaff([...staff, { name: '', email: '' }]);
          }}
        >
          <FaPlus size='1rem' />
        </Button>
        <Button
          onClick={() => {
            handleOnClick('/schedule');
          }}
        >
          done
        </Button>
      </Container>
    </>
  );
};

export default New;
