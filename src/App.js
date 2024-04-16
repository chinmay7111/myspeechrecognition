import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
const App = () =>{
 const [textcopy , setTextCopy]=useState();
  const [isCopied, setCopied] = useClipboard(textcopy);
  
  const startListen =()=> SpeechRecognition.startListening({ continuous: true,language:'en-IN'});
  
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <>
      <div className="w-full h-screen bg-slate-100  ">
        <div className="flex justify-center">
          <h1 className=" text-teal-400 text-2xl font-semibold mt-6  ">Speech Recognition App</h1>
        </div>

        <p className=" text-center mt-6">This is an Speech Recognition Appliction , Which helps you to Translet Speech To Text also you can Copy that Text . </p>

        <div className=" grid justify-items-center    " onClick={() => setTextCopy(transcript)}>
          <div className="  w-1/3 h-96 border-2 rounded-md mt-12 p-8 shadow-2xl"  >
          {transcript}
          </div>
          <div className="flex justify-center m-4 text-white text-xl ">
        <button className="bg-teal-300 py-2 px-5 rounded-md mx-4" onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
        <button onClick={startListen} className="bg-teal-300 py-2 px-5 rounded-md mx-4"> start</button>
        <button onClick={SpeechRecognition.stopListening} className="bg-teal-300 py-2 px-5 rounded-md mx-4"> stop</button>
        </div>
        </div>

        <div className='text-center fixed bottom-0 left-0 w-full'>
          <h1> created by <span className='text-teal-600 font-semibold'>Chinmay</span></h1>
        </div>
      </div>
    </>
  )
}


export default App
