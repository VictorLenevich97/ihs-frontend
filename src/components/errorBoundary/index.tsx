import React from 'react';

import { Title } from 'effects/typography';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error ? (
      <Title center size={20}>
        Ошибка в работе приложения. Попробуйте позже!
      </Title>
    ) : (
      children
    );
  }
}

export default ErrorBoundary;
