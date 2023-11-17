import './Restart.css'
import PropTypes from 'prop-types';

const RestartButton = ({ onClick }) => (
       <button className='restart' onClick={onClick}>
        Начать заново
    </button>
);

RestartButton.propTypes = {
    onClick: PropTypes.func,
};

export default RestartButton;