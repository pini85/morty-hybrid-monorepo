import React, { useState, useEffect } from "react";
import rick from "@/assets/rick.png";
import { DelayedSpinnerProps } from "./Spinner.types";
import * as S from "./Spinner.styles";

const Spinner: React.FC<DelayedSpinnerProps> = ({ delay = 200 }) => {
  //best practice would be 200ms but this spinner is too fun :D
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) {
    return null;
  }

  return <S.Image src={rick} alt="Loading..." />;
};

export default Spinner;
