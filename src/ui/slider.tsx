"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "./utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    {...props}
    className={cn(
      "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50",
      className
    )}
  >
    {/* Track */}
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200">
      {/* Range highlight */}
      <SliderPrimitive.Range className="absolute h-full bg-blue-500" />
    </SliderPrimitive.Track>

    {/* Thumb (draggable circle) */}
    <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border border-blue-500 bg-white shadow hover:bg-blue-100 focus:outline-none focus:ring-4 focus:ring-blue-300" />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
