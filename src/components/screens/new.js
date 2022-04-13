import React from 'react';
import Text from '../styled/text';
import Container from '../styled/container';
import Field from '../styled/field';
import Button from '../styled/button';

const New = () => {
  const [staff, setStaff] = React.useState(['']);
  const setStaffMember = (index, name) => {
    const newStaff = [...staff];
    newStaff[index] = name;
    setStaff([...newStaff]);
  };
  return (
    <>
      <Container>
        <Text weight={'900'} size='5rem'>
          new staff
        </Text>
      </Container>
      {staff.map((s, index) => {
        return (
          <Field
            name={'staff' + index}
            placeholder='name'
            value={s}
            setValue={name => {
              setStaffMember(index, name);
            }}
          />
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
