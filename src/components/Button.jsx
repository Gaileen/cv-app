import PropTypes from "prop-types";

export default function Button({ name, handleOnClick }) {
    return (
        <div className="btnContainer">
            {name === "Submit" && 
                <button className="submitBtn" type="submit" onClick={handleOnClick}>{name}</button>}
            
            {name.substring(0, 3) === "Add" && 
                <button className="addBtn" type="button" onClick={handleOnClick}>{name}</button>}
            
            {name === "Delete" && 
                <button className="deleteBtn" type="button" onClick={handleOnClick}>{name}</button>}
        </div>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    handleOnClick: PropTypes.func.isRequired,
};