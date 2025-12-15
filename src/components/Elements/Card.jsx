import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import sambutan from "@/assets/poto-kepalaDesa.png";

const CardPengurus = () => {
  return (
    <>
      <Card className="flex justify-center items-center">
        <CardHeader>
          <img src={sambutan} alt="" height="80px" width="80" />
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default CardPengurus;
