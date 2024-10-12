import PropTypes from "prop-types";
import Button from "./Button";

export default function Edu({ eduInfo, setEduInfo }) {
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

    function deleteEduEntry(id) {
        setEduInfo((eduInfo) => {
            return eduInfo.filter((entry) => entry.entryId !== id);
        });
    }

    function updateEduEntry(id, key, newVal) {
        const newEduInfo = eduInfo.map((entry) => {
            if (entry.entryId === id) {
                return { ...entry, [key]: newVal}
            }
            return entry;
        });
        setEduInfo(newEduInfo);
    }

    return (
        <div className="cardForm">
            <h2>Education</h2>

            {eduInfo.map(entry => (
                <form key={entry.entryId}>
                    <label>School: </label>
                    <input 
                        type="text"
                        value={entry.school}
                        onChange={(e) => updateEduEntry(entry.entryId, 
                            "school", e.target.value)}/>

                    <label>Study: </label>
                    <input 
                        type="text"
                        value={entry.study}
                        onChange={(e) => updateEduEntry(entry.entryId, 
                            "study", e.target.value)}/>

                    <label>Date: </label>
                    <input 
                        type="text"
                        value={entry.date}
                        onChange={(e) => updateEduEntry(entry.entryId, 
                            "date", e.target.value)}/>

                    {/* <Button name="Submit" handleOnClick={handleSubmit}/> */}

                    {eduInfo.length > 1 && 
                        <Button name="Delete" handleOnClick={() => deleteEduEntry(entry.entryId)} />}
                </form>
            ))}

            <Button name="Add Education" handleOnClick={addEduEntry} />
        </div>
    );
}

Edu.propTypes = {
    eduInfo: PropTypes.array.isRequired,
    setEduInfo: PropTypes.func.isRequired,  
};