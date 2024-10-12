import { useState } from "react";
import Button from "./Button";
import handleSubmit from "./HandleSubmit";

export default function Edu() {
    const [eduInfo, setEduInfo] = useState([
        {
            school: "",
            study: "",
            date: "",
            entryId: crypto.randomUUID(),
        },
    ]);

    function addEduEntry() {
        setEduInfo((eduInfo) => [
            ...eduInfo,
            {
                school: "",
                study: "",
                date: "",
                entryId: crypto.randomUUID(),
            },
        ]);
    }

    return (
        <div className="cardForm">
            <h2>Education</h2>

            {eduInfo.map(entry => (
                <form key={entry.entryId}>
                    <label>School: </label>
                    <input />

                    <label>Study: </label>
                    <input />

                    <label>Date: </label>
                    <input />

                    <Button name="Submit" handleOnClick={handleSubmit}/>
                </form>
            ))}

            <Button name="Add Experience" handleOnClick={addEduEntry} />
        </div>
    );
}