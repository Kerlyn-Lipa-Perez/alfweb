import Image from "next/image";
import React from "react";

function Alf() {
  return (
    <div>
      <div className="flex flex-col tiems-center w-full mt-20">
        <Image
          src="/hoja.png"
          alt="alfalfa"
          className="object-contain  after:inset-0 after:bg-inherit filter after:blur-2xl after:saturate-200 -z-10 aspect-square self-center justify-center "
          width={400}
          height={100}
        />
      </div>
    </div>
  );
}

export default Alf;
