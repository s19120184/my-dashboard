"use client";

import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "../../src/store";
import { IoCalculator } from "react-icons/io5";

export default function WidgetsGrid() {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <SimpleWidget
        title={count + ""}
        subTitle="contador"
        label="Estado"
        icon={<IoCalculator size={50} />}
        href="/dashboard/counter"
      />
    </div>
  );
}
