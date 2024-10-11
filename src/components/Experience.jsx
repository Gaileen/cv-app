import CardForm from "./CardForm";

export default function Experience() {
    const sections = [
        { section: "Company Name", id: crypto.randomUUID() },
        { section: "Position", id: crypto.randomUUID() },
        { section: "Start Date", id: crypto.randomUUID() },
        { section: "End Date", id: crypto.randomUUID() },
        { section: "Responsibilities", id: crypto.randomUUID() }
    ];
    // ^add inputType: "" ?

    return (
        <>
            <CardForm title="Experience" inputs={sections}/>

            {/* CHANGE THIS FRI so usr can add +Edu */}
            <button>Add Experience</button>
        </>
    );
}