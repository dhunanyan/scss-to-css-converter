import * as React from 'react';
import { FaTimesCircle } from 'react-icons/fa';

import './ErrorPopup.scss';

export type ErrorPopupPropsType = {
  name: string;
  errorMessage: string;
  closePopup: () => void;
};

export const ErrorPopup = ({
  name,
  errorMessage,
  closePopup,
}: ErrorPopupPropsType) => (
  <div className="error-popup" onClick={closePopup}>
    <div className="error-popup__container">
      <div className="error-popup__header">
        <h3>Error</h3>
        <button className="error-popup__button" onClick={closePopup}>
          <FaTimesCircle />
        </button>
      </div>
      <div className="error-popup__content">
        <h4 className="error-popup__subtitle">{name}</h4>
        <p className="error-popup__message">{errorMessage}</p>
      </div>
    </div>
  </div>
);
