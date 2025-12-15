import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import sambutan from "@/assets/poto-kepalaDesa.png";

const CardPengurus = () => {
  return (
    <>
    <div>
      <Card className="p-6">
        <CardHeader className="flex flex-col items-center text-center ">
          <img src={sambutan} alt="" height="200px" width="200px" className="w-48 h-48 object-cover mx-auto"/>
          <CardTitle>Nama</CardTitle>
          <CardDescription>Jabatan</CardDescription>
        </CardHeader>
      </Card>
    </div>
    </>
  );
};

export default CardPengurus;
