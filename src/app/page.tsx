import React from 'react'
import { SunIcon } from '@heroicons/react/24/outline'


function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-2 text-white'>
     <h1 className="text-5xl font-bold mb-20"> Sam Bot</h1>  
     <div>
      <div className='flex flex-col items-center justify-center mb-5'>
        <SunIcon className="h-8 w-8 text-blue-500" />
        <h2>Example</h2>
      </div>
      <div className='space-y-2'>
        <p className='infoText'> Explain Something to me1 </p>
        <p className='infoText'> Explain Something to me2 </p>
        <p className='infoText'> Explain Something to me3 </p>
      </div>
     </div>
    </div>
  );
}

export default HomePage