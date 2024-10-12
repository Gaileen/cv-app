// onClick submit Button function

const handleSubmit = (e) => {
    e.preventDefault();

    const btnName = e.target.className;
    console.log("Submit.");
};

export default handleSubmit;