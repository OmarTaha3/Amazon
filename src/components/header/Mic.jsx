import React, { useEffect } from "react";
import MicIcon from "@mui/icons-material/Mic";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Mic = ({ setMicResult }) => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const handleListing = () => {
    resetTranscript();
    setIsListening(true);
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };
  useEffect(() => {
    setMicResult(transcript);
  }, [setMicResult, transcript]);
  return (
    <div className="from-neutral-500 pr-2 bg-white h-full flex items-center  text-gray-700">
      {isListening ? (
        <MicIcon
          onClick={stopHandle}
          className="text-red-600 cursor-pointer animate-pulse"
        />
      ) : (
        <MicIcon
          onClick={handleListing}
          className="text-gray-700 cursor-pointer "
        />
      )}
    </div>
  );
};

export default Mic;
