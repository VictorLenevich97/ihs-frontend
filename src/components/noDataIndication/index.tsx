import { Text } from 'effects/typography';

interface Props {
  content?: string;
}

export const NoDataIndication = ({ content = 'Нет данных!' }: Props) => (
  <Text center color="#000" className="mt-3 mb-3">
    {content}
  </Text>
);
