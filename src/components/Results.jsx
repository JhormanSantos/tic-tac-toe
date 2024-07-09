import { Square } from "./Square"
import PropTypes from 'prop-types';

export const Results = ({winner,resetGame}) => {
    localStorage.setItem('winner', winner)
  return (
    <section className="winner">
        <div className="text">
            <h2>
                {
                winner === false 
                ? "EMPATE"
                : "GANO: "
                }
            </h2>
            {
                
            winner && 
                <header className="win">
                    <Square>{winner}</Square>
                </header>
            }
            

            <footer>
                <button onClick={resetGame}>Restart</button>
            </footer>

        </div>
    </section>
  )
}

Results.propTypes = {
    resetGame : PropTypes.func.isRequired,
    winner: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ]).isRequired 
};
