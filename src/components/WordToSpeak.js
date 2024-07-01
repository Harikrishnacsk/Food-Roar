import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const WordToSpeak = () => {
   
    const [voices, setVoices] = useState([]);
    const [selectedVoice, setSelectedVoice] = useState(null)


    useEffect(() =>{
        const updateVoices = () =>{
         const availableVoices = window.speechSynthesis.getVoices();
         setVoices(availableVoices);
         console.log('from useeffect');
         if(availableVoices.length > 0){
            setSelectedVoice(availableVoices[0]);           
         }
        };
        updateVoices();
        console.log('memory leakage');
         window.speechSynthesis.addEventListener("voiceschanged", updateVoices)        
        return () => {
            console.log('memory not leaked');
            window.speechSynthesis.removeEventListener("voiceschanged", updateVoices)           
        }
    }, [selectedVoice]);

    let speech = new SpeechSynthesisUtterance();
    const Speak = () =>{
        if(selectedVoice){
      let texttospeech = document.getElementById('texttospeech').value;
      speech.text = texttospeech;
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      speech.voice = selectedVoice;
      window.speechSynthesis.speak(speech);
        }
    }

    const handleVoiceChange = (event) =>{
           const voiceName = event.target.value;
           const selecetedVoice = voices.find(voice => voice.name === voiceName);
           setSelectedVoice(selecetedVoice);
    }



     return (
       <div>
        <textarea id="texttospeech"></textarea>
        <select onChange={handleVoiceChange}>
            {voices.map(voice=>(
                <option key={voice.name} value={voice.name}>{voice.name}</option>
            ))}
        </select>
        <Button variant ="primary" onClick={Speak}> Speak </Button>
       </div>
     )
}

export default WordToSpeak;