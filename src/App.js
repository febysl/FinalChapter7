import React from 'react';
import './App.css';
import foto from './foto.png';
import foto2 from './foto2.png'

function App() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50">
    <div className='flex flex-col mb-2'>
    <img
          src={foto2} 
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full mb-4"
        />
        <span className='font-bold text-lg text-teal-700'>Capt of Front End JavaScript 2</span>
    </div>
    <div>
    <hr/>
      <div className="max-w-md py-6 px-20 mt-2 bg-gradient-to-r from-emerald-100 to-emerald-300 rounded-lg shadow-md ">
        
        <img
          src={foto} 
          alt="Profile"
          className="mx-auto w-32 h-32 rounded-full mb-4"
        />
        <div className='text-white flex flex-col justify-center items-center gap-3 '>
        <span className="text-xl font-semibold ">Feby Setyany Lestari </span>
        <p className="text-sm ">
          Pekalongan
        </p>
        <p className=' text-sm flex flex-col gap-3'>febysl46@gmail.com
        <hr/>
        </p>
        <p className='italic'>Nakama</p>
        </div>
        <div className="flex justify-center mt-4 gap-2 ">
          <a     
            href="https://www.instagram.com/feby.se/" 
            className="text-white hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"/><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011"/></g></svg> 
          </a>
          <a 
          href="https://www.upwork.com/" 
          className="text-white  hover:shadow-md"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v5a3 3 0 0 0 6 0V7h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0-7c-2.027 0-3.137 1-3.5 3c-.242 1.33-.908 4-2 8"/></svg>
          </a>
          <a
          href="https://www.linkedin.com/in/febysetyanylestari" 
          className="text-white hover:shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12Zm0 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM8 10a1 1 0 0 1 .993.883L9 11v5a1 1 0 0 1-1.993.117L7 16v-5a1 1 0 0 1 1-1Zm3-1a1 1 0 0 1 .984.821a5.82 5.82 0 0 1 .623-.313c.667-.285 1.666-.442 2.568-.159c.473.15.948.43 1.3.907c.315.425.485.942.519 1.523L17 12v4a1 1 0 0 1-1.993.117L15 16v-4c0-.33-.08-.484-.132-.555a.548.548 0 0 0-.293-.188c-.348-.11-.849-.052-1.182.09c-.5.214-.958.55-1.27.861L12 12.34V16a1 1 0 0 1-1.993.117L10 16v-6a1 1 0 0 1 1-1ZM8 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z"/></g></svg>
          </a>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
