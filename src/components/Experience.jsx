import { useState } from "react";
import Button from "./Button";
import handleSubmit from "./HandleSubmit";

export default function Experience() {
    const [expInfo, setExpInfo] = useState([
        {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            responsibilities: "",
            entryId: crypto.randomUUID(),
        },
    ]);

    function addExpEntry() {
        setExpInfo((expInfo) => [
            ...expInfo,
            {
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                responsibilities: "",
                entryId: crypto.randomUUID(),
            },
        ]);
    }

    function deleteExpEntry(id) {
        setExpInfo((expInfo) => {
            return expInfo.filter((entry) => entry.entryId !== id);
        });
    }

    return (
        <div className="cardForm">
            <h2>Experience</h2>
            
            {/* The "()" following "=>" implies "return" keyword. */}
            {expInfo.map(entry => (
                // key to help React keep track of changes.
                <form key={entry.entryId}>
                    <label>Company: </label>
                    <input />

                    <label>Position: </label>
                    <input />

                    <label>Start Date: </label>
                    <input />

                    <label>End Date: </label>
                    <input />

                    <label>Responsibilities: </label>
                    <input />

                    <Button name="Submit" handleOnClick={handleSubmit}/>

                    {expInfo.length > 1 && 
                        <Button name="Delete" handleOnClick={() => deleteExpEntry(entry.entryId)} />}
                </form>
            ))}
            
            <Button name="Add Experience" handleOnClick={addExpEntry} />
        </div>
    );
}