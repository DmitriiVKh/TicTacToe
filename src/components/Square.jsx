import './Square.css'
import PropTypes from 'prop-types';


const Square = (props) => {
    return (
        <button className='square' onClick={props.onClick}> {props.value} </button>
    );
}

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func
  };

export default Square;
