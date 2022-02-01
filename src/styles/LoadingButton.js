import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

export default function LoadingButton() {
  return <TailSpin height="30px" color="#fff" arialLabel="loading-indicator" />;
}
