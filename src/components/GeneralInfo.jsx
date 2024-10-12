import { useState } from "react";
import Button from "./Button";
import handleSubmit from "./HandleSubmit";

export default function GeneralInfo() {
    const [genInfo, setGenInfo] = useState([
        {
            name: "",
            email: "",
            phone: "",
            entryId: crypto.randomUUID(),
        },
    ]);

    // define function that calls setGenInfo to handle usr input

    return (
        <div className="cardForm">
            <h2>General Info</h2>

            {genInfo.map(entry => (
                <form key={entry.entryId}>
                    <label>Name: </label>
                    <input />

                    <label>Email: </label>
                    <input />

                    <label>Phone Number: </label>
                    <input />

                    <Button name="Submit" handleOnClick={handleSubmit}/>
                </form>
            ))}
        </div>
    );
}