import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { fonction } from "@/lib/utils";
import { ArrowBigRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex w-full">
      <Card className="w-1/2 border-none bg-transparent shadow-none">
        <CardTitle className="text-center text-4xl mt-15">BIENVENU</CardTitle>
        <CardContent>
          <p className="font-medium text-xl mb-5">
            Fonctionnalité de l'application
          </p>
          {fonction.map((fonction) => (
            <div key={fonction} className="ml-10">
              <ul className="flex gap-2">
                <ArrowBigRight />
                <li className="font-normal mb-5">{fonction}</li>
              </ul>
            </div>
          ))}
        </CardContent>
      </Card>
      <img src="hero_img.png" alt="hero img" className="w-1/2" />
    </div>
  );
};

export default Hero;
