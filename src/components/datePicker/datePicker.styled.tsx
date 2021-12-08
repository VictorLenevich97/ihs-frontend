import styled from 'styled-components';
import { themeVariables } from '../../effects/variables';

export const variables = {
  pickerBorderRadius: 10,
};

export const DatePickerContainer = styled.div`
  width: 100%;
  .react-datepicker {
    border-radius: ${variables.pickerBorderRadius}px;
    border: 1px solid ${themeVariables.borderColor};
    font-family: inherit;
    padding-bottom: 10px;
    width: 100%;
    min-width: 290px;
    &__header {
      border-top-left-radius: ${variables.pickerBorderRadius}px;
      border-top-right-radius: ${variables.pickerBorderRadius}px !important;
      background-color: transparent;
      border-bottom: none;
    }
    &__month-container {
      width: 100%;
    }
    &__week,
    &__day-names {
      display: flex;
      justify-content: space-around;
    }

    &__current-month {
      font-weight: 500;
      font-size: 20px;
      margin-top: 17px;
    }

    &__navigation {
      top: 24px;

      &--previous {
        left: 20px;
      }

      &--next {
        right: 20px;
      }

      &-icon {
        &::before {
          border: 10px solid transparent;
          border-left: 18px solid ${themeVariables.primaryColor};
          height: 5px;
          transition: 0.1s ease-in-out;
        }

        &--previous::before {
          transform: rotate(180deg);
        }

        &--next::before {
          transform: rotate(0deg);
        }
      }

      &:hover *::before {
        border-color: transparent;
        border-left-color: ${themeVariables.primaryColor_hover};
      }
    }

    &__day {
      color: ${themeVariables.primaryColor};
      font-weight: 600;
      font-size: 20px;
      margin: 3px;
      padding: 2px;
      box-sizing: content-box;
      outline: none; //special disable accessibility
      border-radius: 50%;

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 50%;
      }

      &-name {
        margin: 27px 5px 6px;
        font-size: 20px;
      }

      &--outside-month,
      &--disabled {
        color: rgba(0, 0, 0, 0.2);
      }

      &--in-selecting-range {
        color: #fff;
        background-color: ${themeVariables.primaryColor_hover} !important;
      }

      &--selected,
      &--in-range {
        color: #fff !important;
        background-color: ${themeVariables.primaryColor} !important;

        &:hover {
          background-color: ${themeVariables.primaryColor_hover} !important;
        }
      }

      &--keyboard-selected {
        color: #fff;
        background-color: ${themeVariables.secondColor};
        border-radius: 50%;

        &:hover {
          background-color: ${themeVariables.secondColor_hover};
        }
      }

      &--today {
        font-weight: 800;
      }
    }

    &__input-container {
      input {
        width: 100%;
        border-radius: ${themeVariables.borderRadius};
        border: 2px solid ${themeVariables.primaryColor};
        padding: 8px 20px;
        font-size: 14px;
        line-height: 17px;
        outline: none;
        height: ${themeVariables.controlsHeight};
      }
    }
  }
`;
