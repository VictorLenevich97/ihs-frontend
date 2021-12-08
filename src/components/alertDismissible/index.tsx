import { Alert } from 'react-bootstrap';

interface Props {
  content?: any;
}

export const AlertDismissible = ({ content = 'Общая ошибка ...' }: Props) => {
  return (
    <Alert variant="danger" className="mt-2">
      <p>{content}</p>
    </Alert>
  );
};
