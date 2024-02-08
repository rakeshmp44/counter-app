import { useState } from "react";
import './playAudio.css';

function PlayAudio({ PlayAudio }) {
    const [name, setName] = useState(" ");
    const [audioPlaying, setAudioPlaying] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const audio = new Audio('/gandhi.mp3');
        audio.play();
        setAudioPlaying(true);
        audio.onended = () => setAudioPlaying(false);
        };


    return (
        <div>
            <h1 className="serious">Are u seriousss??????</h1>
            <p>u negative minded mother's favorite, I have a audio tape for u!!</p>
            <h3>anyway, out of curiosity just wanted to know ur name..</h3>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button type="submit">submit</button>
            </form>

            {audioPlaying && <p>fuck ur negative mind {name}...</p> }
        </div>
    );
}


export default PlayAudio;