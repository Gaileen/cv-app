import PropTypes from "prop-types";

export default function GeneralInfo({ genInfo, setGenInfo }) {
    function updateGenEntry(id, key, newVal) {
        const newGenInfo = genInfo.map((entry) => {
            if (entry.entryId === id) {
                return { ...entry, [key]: newVal}
            }
            return entry;
        });
        setGenInfo(newGenInfo);
    }

    return (
        <div className="cardForm">
            <h2>General Info</h2>

            {genInfo.map(entry => (
                <form key={entry.entryId}>
                    <label>Name: </label>
                    <input 
                        type="text"
                        value={entry.name}
                        onChange={(e) => updateGenEntry(entry.entryId, 
                            "name", e.target.value)}/>

                    <label>Email: </label>
                    <input 
                        type="text"
                        value={entry.email}
                        onChange={(e) => updateGenEntry(entry.entryId, 
                            "email", e.target.value)}/>

                    <label>Phone Number: </label>
                    <input 
                        type="text"
                        value={entry.phone}
                        onChange={(e) => updateGenEntry(entry.entryId, 
                            "phone", e.target.value)}/>

                    {/* <Button name="Submit" handleOnClick={handleSubmit}/> */}
                </form>
            ))}
        </div>
    );
}

GeneralInfo.propTypes = {
    genInfo: PropTypes.array.isRequired,
    setGenInfo: PropTypes.func.isRequired,  
};