import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2rem;
`;

export const Input = styled.input`
  position: relative;
  z-index: -1;
  &:checked:before {
    content: '';
    position: absolute;
    left: -5px;
    top: -3px;
    z-index: 1;
    background-color: #4f7752;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNDk5NjcgOS40OTk4NEwxLjk5OTY3IDUuOTk5ODRMMC44MzMwMDggNy4xNjY1TDUuNDk5NjcgMTEuODMzMkwxNS40OTk3IDEuODMzMTdMMTQuMzMzIDAuNjY2NTA0TDUuNDk5NjcgOS40OTk4NFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=');
    background-repeat: no-repeat;
    background-size: 16px;
    background-position: center;
  }

  &:before {
    content: '';
    position: absolute;
    left: -5px;
    top: -3px;
    width: 30px;
    height: 30px;
    border: 2px solid #4f7752;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    z-index: 1;
  }

  &:checked:after {
    content: '';
    position: absolute;
    left: -5px;
    top: -3px;
    width: 30px;
    height: 30px;
    border: 2px solid #4f7752;
    border-radius: 50%;
    background: #4f7752;
  }
`;

export const Checkmark = styled.span`
  position: relative;
  top: -4px;
  padding-left: 25px;
  line-height: 1.3rem;
  font-size: 0.85rem;
`;
