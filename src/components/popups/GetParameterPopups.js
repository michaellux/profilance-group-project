import React from 'react';

import { GET_ENUMS } from "../../router";

import useGetPopupState from "./hooks/useGetPopupState";
import LogIn from "./login";

const popups = {
  [GET_ENUMS.popup.logIn]: LogIn
};

const GetParameterPopups = () => {
  const { mountedPopup, isOpened } = useGetPopupState();
  const Component = popups[mountedPopup];

  if (!Component) {
    return null;
  }

  return <Component isOpened={isOpened} />;
};

export default GetParameterPopups;