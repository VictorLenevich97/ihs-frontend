import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 385px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
  text-align: left;
`;

export const Date = styled.p`
  padding: 5px 0 20px 0;
  color: #c7c7c7;
`;

export const Text = styled.span`
  font-size: 1rem;
  line-height: 1.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;
