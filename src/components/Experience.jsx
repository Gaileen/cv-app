import PropTypes from "prop-types";
import Button from "./Button";

export default function Experience({ expInfo, setExpInfo }) {
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

    function updateExpEntry(id, key, newVal) {
        const newExpInfo = expInfo.map((entry) => {
            if (entry.entryId === id) {
                return { ...entry, [key]: newVal}
            }
            return entry;
        });
        setExpInfo(newExpInfo);
    }

    return (
        <div className="cardForm">
            <h2>Experience</h2>
            
            {/* The "()" following "=>" implies "return" keyword. */}
            {expInfo.map(entry => (
                // key to help React keep track of changes.
                <form key={entry.entryId}>
                    <label>Company: </label>
                    <input 
                        type="text"
                        value={entry.company}
                        onChange={(e) => updateExpEntry(entry.entryId, 
                            "company", e.target.value)}/>

                    <label>Position: </label>
                    <input 
                        type="text"
                        value={entry.position}
                        onChange={(e) => updateExpEntry(entry.entryId, 
                            "position", e.target.value)}/>

                    <label>Start Date: </label>
                    <input 
                        type="text"
                        value={entry.startDate}
                        onChange={(e) => updateExpEntry(entry.entryId, 
                            "startDate", e.target.value)}/>

                    <label>End Date: </label>
                    <input 
                        type="text"
                        value={entry.endDate}
                        onChange={(e) => updateExpEntry(entry.entryId, 
                            "endDate", e.target.value)}/>

                    <label>Responsibilities: </label>
                    <input 
                        type="text"
                        value={entry.responsibilities}
                        onChange={(e) => updateExpEntry(entry.entryId, 
                            "responsibilities", e.target.value)}/>

                    {/* Update Info alr handled. 
                        This'll be a live editor for now. */}
                    {/* <Button name="Submit" handleOnClick={handleSubmit}/> */}

                    {expInfo.length > 1 && 
                        <Button name="Delete" handleOnClick={() => deleteExpEntry(entry.entryId)} />}
                </form>
            ))}
            
            <Button name="Add Experience" handleOnClick={addExpEntry} />
        </div>
    );
}

Experience.propTypes = {
    expInfo: PropTypes.array.isRequired,
    setExpInfo: PropTypes.func.isRequired,
};