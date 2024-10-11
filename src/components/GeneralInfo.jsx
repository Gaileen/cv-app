import CardForm from "./CardForm";

export default function GeneralInfo() {
    const sections = [
        { section: "Name", id: crypto.randomUUID() },
        { section: "Email", id: crypto.randomUUID() },
        { section: "Phone Number", id: crypto.randomUUID() }
    ];
    // ^add inputType: "" ?

    return (
        <>
            <CardForm title="General Info" inputs={sections}/>
        </>
    );
}