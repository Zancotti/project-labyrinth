import React from "react";
import Lottie from "react-lottie";
import animationData from "../Lotties/spinner-slow-three-colors";

// The component for the Lottie spinner.
export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <>{<Lottie options={defaultOptions} height={100} width={100} />}</>;
};
