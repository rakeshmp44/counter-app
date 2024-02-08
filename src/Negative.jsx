import { useState } from "react"
import PlayAudio from "./PlayAudio";

function Negative({ counter }) {
    const [audio, setAudio] = useState(false);

    const toggleSelection = () => {
        setAudio(true);
        return;
    }

    const ifNo = () => {
        alert("Congratulations!!!!! u just missed a cuss word ");
    }

    return (
        <div>
            <div>
                <h3>are u sure u want a negative number??</h3>
                <button onClick={toggleSelection}>yes</button>
                <button onClick={ifNo}>no</button>
                {audio === true && <PlayAudio />}
            </div>
            <div>
                
            </div>

        </div>


    )
}

export default Negative;