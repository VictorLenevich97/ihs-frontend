import { Container } from '../../effects/container';
import { Title } from '../../effects/typography';
import React from 'react';
import { PlanCalendarContent } from '../../modules';

const PlanCalendar = () => {
  return (
    <Container fullwidth>
      <Title size={26} lineHeight={50} mb={20}>
        План-календарь
      </Title>
      <PlanCalendarContent />
    </Container>
  );
};

export default PlanCalendar;
