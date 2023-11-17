import PropTypes from 'prop-types';
import './Status.css'

const Status = ({ winner, xIsNext, board  }) => {
    const draw = (board.every(square => square !== null));

    if (winner) {
        return <div className='status'>Победитель: {winner}</div>;
    } else if (draw) {
        return <div className='status'>Ничья!</div>;
    } else {
        return <div className='status'>Ходит: {xIsNext ? 'X' : 'O'}</div>;
    }
};

export default Status;

Status.propTypes = {
    winner: PropTypes.string,
    xIsNext: PropTypes.bool,
    board: PropTypes.array,
};