import React from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react";

const CardPenduduk = () => {
  return (
    <>
      <div className="p-10">
        <Card className="p-6">
        <CardHeader className="flex flex-row justify-around items-center gap-4">
          <div>
            <Icon icon="raphael:people" width="48" height="48" />
          </div>
          <div className="text-left">
            <CardTitle className="text-4xl">Total Penduduk</CardTitle>
            <CardDescription className="text-2xl font-bold text-accent">1.651 Jiwa</CardDescription>
          </div>
        </CardHeader>
      </Card>
      </div>
    </>
  );
};

export default CardPenduduk;
