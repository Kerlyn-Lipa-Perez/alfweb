'use client'
import React from 'react'
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { motion, MotionConfig } from "motion/react";
import clsx from "clsx/lite";
import { useEffect, useState } from "react";


const MotionNumberFlow = motion.create(NumberFlow);


function Experience() {
  const canAnimate = useCanAnimate();
  const [number, setNumber] = useState(0);

  // Cuando el componente se carge, empieza la animación
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setNumber(current);
      if (current >= 20) {
        clearInterval(interval); // Detener el contador en 20
      }
    }, 100); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <>
      {/* Features */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full mt-10 flex flex-col items-center justify-center text-center">
        {/* Grid */}
        <div className="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
          {/* Left Stat */}
          <div className="lg:col-span-4">
            <div className="lg:pe-6 xl:pe-12 flex flex-col items-center text-center">
              <MotionConfig
                transition={{
                  layout: canAnimate
                    ? { duration: 0.9, bounce: 0, type: "spring" }
                    : { duration: 0 },
                }}
              >
                <p className="text-4xl sm:text-6xl font-bold text-lime-600">
                  +
                  <MotionNumberFlow
                    value={number}
                    format={{ notation: "compact", style: "decimal" }}
                    locales="en-US"
                    className="inline"
                  /> años
                </p>
              </MotionConfig>

              <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                En el negocio de la venta de alfalfa
              </p>
            </div>
          </div>
          {/* End Left Stat */}

          {/* Right Stats */}
          <div className="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 dark:lg:before:bg-neutral-700 px-4">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center text-center mx-auto max-w-4xl">
              {/* Stat 1 */}
              <div>
                <p className="text-3xl font-semibold text-lime-600">99.95%</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  a
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <p className="text-3xl font-semibold text-lime-600">2,000+</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  b
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <p className="text-3xl font-semibold text-lime-600">85%</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  c
                </p>
              </div>
            </div>
          </div>
          {/* End Right Stats */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Features */}
    </>
  );
}

export default Experience;