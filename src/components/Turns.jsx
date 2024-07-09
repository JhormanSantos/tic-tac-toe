import { TURNS } from "../constants/constants"
import { Square } from "./Square"
import PropTypes from 'prop-types';


export const Turns = ({stateTurn}) => {
  return (
    <section className="turn">
    <Square isSelected={stateTurn === TURNS.x}>
      {TURNS.x}
    </Square>
    <Square isSelected={stateTurn === TURNS.o}
    >{TURNS.o}
    </Square>
  </section>
  )
}

Turns.propTypes = {
    stateTurn: PropTypes.string.isRequired
};

