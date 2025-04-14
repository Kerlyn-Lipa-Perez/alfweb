import React from 'react'
import Image from 'next/image'
function Alf() {
  return (
    <div className='min-h-screen p-8 pb-20 sm:p-20 flex flex-col md:flex-row items-center justify-center gap-16'>
        <div className='flex-1'>
            <Image
                src="/hoja.png"
                alt="alfalfa"
                className='w-full h-auto'
                width={500}
                height={500}
            />
        </div>
    </div>
  )
}

export default Alf