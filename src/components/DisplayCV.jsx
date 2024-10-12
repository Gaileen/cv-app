import PropTypes from "prop-types";

export default function DisplayCV({ genInfo, eduInfo, expInfo }) {
    return (
        <>
            <div className="heading">
                <h1>{genInfo[0].name || "Your Name"}</h1>
                <div className="personalDetails">
                    <p>{genInfo[0].email || "Email"}</p>
                    <p>{genInfo[0].phone || "Phone Number"}</p>
                </div>
            </div>

            <div className="displayExp">
                <header><h2>Experience</h2></header>
                {/* loop to display each xp */}
                <p>{expInfo[0].position}</p>
            </div>

            <div className="displayEdu">
                <header><h2>Education</h2></header>
                {/* loop to display each edu */}
                <p>{eduInfo[0].school}</p>
            </div>
        </>
    );
}

DisplayCV.propTypes = {
    genInfo: PropTypes.array.isRequired,
    eduInfo: PropTypes.array.isRequired,
    expInfo: PropTypes.array.isRequired,
};