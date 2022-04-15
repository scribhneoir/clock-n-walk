import React from 'react';
import styled from 'styled-components';
import startOfMonth from 'date-fns/startOfMonth';
import getDaysInMonth from 'date-fns/getDaysInMonth';
import moment from 'moment';
import Text from '../styled/text';
import Button from '../styled/button';
import Container from '../styled/container';
import { useNavigate } from 'react-router-dom';
import { IoCaretBack } from 'react-icons/io5';

const Day = styled.button`
  height: 6.5vh;
  width: 6.5vh;
  margin: 0.5rem auto;
  background: ${props =>
    props.day === 'c'
      ? props.theme.main
      : props.day === 'w'
      ? props.theme.secondary
      : props.day === 'c/w'
      ? props.theme.highlight
      : props.background || 'transparent'};
  border-radius: 0.5rem;
  border: ${props =>
    props.noBorder ? '0px' : ' 3px solid ' + props.theme.main};
  color: ${props =>
    props.day === 'c' || props.day === 'w' || props.day === 'c/w'
      ? props.theme.background
      : props.theme.main};
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.main};
    color: ${props => props.theme.background};
  }
`;
const DayText = styled.text`
  font-family: 'Mandali', sans-serif;
  font-size: 1rem;
  font-weight: 900;
`;
const Days = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Dates = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Weekday = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Month = styled.text`
  font-family: 'Mandali', sans-serif;
  color: ${props => props.theme.secondary};
  font-size: 30px;
`;
const Year = styled.text`
  font-family: 'Mandali', sans-serif;
  color: ${props => props.theme.main};
  font-size: 15px;
  padding-left: 5px;
  padding-right: 5px;
`;

const Schedule = () => {
  const [days, setDays] = React.useState([]);
  const d = moment().add(2, 'months').toDate();
  const popCal = React.useCallback(() => {
    const d = moment().add(2, 'months').toDate();
    const first = startOfMonth(d).getDay();
    const nDays = getDaysInMonth(d);
    let darr = [];
    for (let i = 0; i < nDays + first; i += 7) {
      let week = [];
      for (let j = i; j < i + 7; j++) {
        if (j < nDays + first) {
          week.push(j - first + 1);
        } else {
          week.push(-(j - first + 1));
        }
      }
      darr.push(week);
    }
    return [...darr];
  }, []);
  React.useEffect(() => {
    setDays(popCal());
  }, [popCal]);
  const calendar = popCal();
  const navigate = useNavigate();
  const goBack = React.useCallback(
    () => navigate('/', { replace: true }),
    [navigate]
  );
  const changeDay = (windex, dindex) => {
    let newDays = [...days];
    const availabillity = days[windex][dindex];

    availabillity === 'c'
      ? (newDays[windex][dindex] = 'w')
      : availabillity === 'w'
      ? (newDays[windex][dindex] = 'c/w')
      : availabillity === 'c/w'
      ? (newDays[windex][dindex] = calendar[windex][dindex])
      : (newDays[windex][dindex] = 'c');

    setDays([...newDays]);
  };

  return (
    <Container noBorder>
      <Text>email@messiah.edu</Text>
      <Container
        button
        buttonText={<IoCaretBack size='1.5rem' />}
        onClick={goBack}
      >
        <Month>
          {d.toLocaleString('default', { month: 'long' }).toLowerCase()}
        </Month>

        <Year>{d.getFullYear()}</Year>
        <Days>
          <Weekday>
            <Text>S</Text>
          </Weekday>
          <Weekday>
            <Text>M</Text>
          </Weekday>
          <Weekday>
            <Text>T</Text>
          </Weekday>
          <Weekday>
            <Text>W</Text>
          </Weekday>
          <Weekday>
            <Text>T</Text>
          </Weekday>
          <Weekday>
            <Text>F</Text>
          </Weekday>
          <Weekday>
            <Text>S</Text>
          </Weekday>
        </Days>
        <Dates>
          {days.map((week, windex) => {
            return (
              <Days>
                {' '}
                {week.map((day, dindex) => {
                  if (day <= 0) {
                    return <Day disabled key={windex + dindex}></Day>;
                  } else
                    return (
                      <Day
                        key={windex + dindex}
                        day={day}
                        onClick={() => {
                          changeDay(windex, dindex);
                        }}
                      >
                        <DayText>{day}</DayText>
                      </Day>
                    );
                })}
              </Days>
            );
          })}
        </Dates>
      </Container>
      <Button>submit</Button>
    </Container>
  );
};

export default Schedule;
