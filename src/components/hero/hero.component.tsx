import React, { FC } from "react";
import Image from "next/image";
import { Button } from "../button";
import { H1, TextBody } from "../typography";

interface HeroProps {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <div className={`row flex-lg-row-reverse align-items-center ${className}`}>
      <div className="col-12 col-sm-8 col-lg-6 mb-1">
        <Image
          src="/logo.svg"
          className="d-block mx-lg-auto img-fluid"
          alt="Juegathon 2022"
          width="700"
          height="500"
        />
      </div>
      <div className="col-lg-6">
        <H1 className="lh-1 mb-3">Juegathon 2022</H1>
        <TextBody>
          El mejor stream de caridad en el norte. 24 horas de stream jugando
          videojuegos.
        </TextBody>
        <TextBody lead bold>
          3 y 4 de Diciembre
        </TextBody>
        <div className="d-grid my-4 gap-3 d-md-flex justify-content-md-start">
          <Button className="btn-lg px-4 me-md-2" href="#">
            Twitch
          </Button>
          <Button className="btn-lg px-4 me-md-2" href="#" secondary>
            Información
          </Button>
        </div>
      </div>
    </div>
  );
};