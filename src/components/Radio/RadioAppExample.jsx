import {RadioGroup, RadioOption} from "./index";
import {useState} from "react";

function RadioAppExample() {
    const [selected, setSelected] = useState("");
    return (
        <div className="RadioAppExample">
            <h2>How did you hear about Little Lemon?</h2>
            <RadioGroup onChange={setSelected} selected={selected}>
                <RadioOption value="social_media">Social Media</RadioOption>
                <RadioOption value="friends">Friends</RadioOption>
                <RadioOption value="advertising">Advertising</RadioOption>
                <RadioOption value="other">Other</RadioOption>
            </RadioGroup>
            <button disabled={!selected}>Submit</button>
        </div>
    );
}

export default RadioAppExample;