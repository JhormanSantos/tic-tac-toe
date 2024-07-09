import PropTypes from 'prop-types';

export const Square = ({children, isSelected, updateBoard, index}) => {
    const className= `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
    
    return ( 
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }

// Square.propTypes = {
//     isSelected: PropTypes.,
//     index: PropTypes.number.isRequired,
//     children: PropTypes.node.isRequired,
//     updateBoard: PropTypes.func.isRequired
// };