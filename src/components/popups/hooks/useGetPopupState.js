import { useState, useEffect, useMemo } from 'react';
import useGetParameter from '../../hooks/router/useGetParameter';

const GET_PARAMS = {
  popup: 'popup',
};

let timeout;

export default () => {
  const popupName = useGetParameter(GET_PARAMS.popup);
  const [mountedPopup, setMountedPopup] = useState(popupName);

  useEffect(() => {
    if (popupName) {
    /* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
      timeout && clearTimeout(timeout);
      setMountedPopup(popupName);
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null);
      }, 300);
    }
  }, [popupName]);

  useEffect(() => () => {
    timeout && clearTimeout(timeout);
  }, []);

  const isOpened = useMemo(() => Boolean(popupName), [popupName]);

  return {
    mountedPopup,
    isOpened,
  };
};
