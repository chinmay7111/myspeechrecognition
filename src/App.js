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
      <div className="min-h-screen bg-slate-100 flex flex-col items-center p-4">
  {/* Heading */}
  <h1 className="text-teal-400 text-2xl font-semibold mt-6 text-center">
    Speech Recognition App
  </h1>

  {/* Description */}
  <p className="text-center mt-4 text-base max-w-md">
    This is a Speech Recognition Application, which helps you translate speech to text. You can also copy the converted text.
  </p>

  {/* Transcript Box */}
  <div
    className="w-full max-w-md h-64 border-2 rounded-md mt-8 p-4 shadow-lg overflow-auto bg-white"
    onClick={() => setTextCopy(transcript)}
  >
    {transcript || <span className="text-gray-400">Your speech will appear here...</span>}
  </div>

  {/* Buttons */}
  <div className="flex flex-wrap justify-center gap-4 mt-6 text-white text-base">
    <button className="bg-teal-400 py-2 px-4 rounded-md" onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
    <button onClick={startListen} className="bg-teal-400 py-2 px-4 rounded-md">
      Start
    </button>
    <button onClick={SpeechRecognition.stopListening} className="bg-teal-400 py-2 px-4 rounded-md">
      Stop
    </button>
  </div>

  {/* Footer */}
  <div className="text-center w-full mt-auto py-4">
    <h1>
      Created by <span className="text-teal-600 font-semibold">Chinmay</span>
    </h1>
  </div>
</div>

    </>
  )
}


export default App
