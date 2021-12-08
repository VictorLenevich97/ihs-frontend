import { Container } from 'effects/container';
import { Title } from 'effects/typography';
import { YmkdChartWithDatePicker } from 'modules';

const YmkdChart = () => {
  return (
    <Container fullwidth>
      <Title size={26} lineHeight={30} mb={20} center>
        Обеспеченность УМКД кафедр
      </Title>

      <YmkdChartWithDatePicker />
    </Container>
  );
};

export default YmkdChart;
