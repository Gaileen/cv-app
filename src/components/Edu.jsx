import CardForm from "./CardForm";

export default function Edu() {
    const sections = [
        { section: "School Name", id: crypto.randomUUID() },
        { section: "Title of Study", id: crypto.randomUUID() },
        { section: "Date of Study", id: crypto.randomUUID() }
    ];
    // ^add inputType: "" ?

    return (
        <>
            <CardForm title="Education" inputs={sections}/>

            {/* CHANGE THIS FRI so usr can add +Edu */}
            <button>Add Education</button>
        </>
    );
}