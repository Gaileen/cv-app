import PropTypes from "prop-types";

export default function DisplayCV({ genInfo, eduInfo, expInfo }) {
    console.log(genInfo, eduInfo, expInfo);

    return (
        <></>
    );
}

DisplayCV.propTypes = {
    genInfo: PropTypes.array.isRequired,
    eduInfo: PropTypes.array.isRequired,
    expInfo: PropTypes.array.isRequired,
};