import PropTypes from "prop-types";
import Button from "./Button";

// inputs is an arr of strs that describe the input field
export default function CardForm({ title, inputs }) {
    return (
        <div className="cardForm">
            <h2>{title}</h2>
            <form>
                {/* The "()" following "=>" implies "return" keyword. */}
                {inputs.map(input => (
                    // key to help React keep track of changes.
                    <div key={input.id}>
                        <label>{input.section}: </label>
                        <input />
                    </div>
                ))}
                <Button />
            </form>
        </div>
    );
}

CardForm.propTypes = {
    title: PropTypes.string.isRequired,
    inputs: PropTypes.array.isRequired,
};