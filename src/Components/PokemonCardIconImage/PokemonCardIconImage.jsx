import bugIcon from '../../assets/icons/Pokemon/PokemonTypes/bug.webp'
import darkIcon from '../../assets/icons/Pokemon/PokemonTypes/dark.webp'
import dragonIcon from '../../assets/icons/Pokemon/PokemonTypes/dragon.webp'
import electricIcon from '../../assets/icons/Pokemon/PokemonTypes/electric.webp'
import fairyIcon from '../../assets/icons/Pokemon/PokemonTypes/fairy.webp'
import fightingIcon from '../../assets/icons/Pokemon/PokemonTypes/fighting.webp'
import fireIcon from '../../assets/icons/Pokemon/PokemonTypes/fire.webp'
import flyingIcon from '../../assets/icons/Pokemon/PokemonTypes/flying.webp'
import ghostIcon from '../../assets/icons/Pokemon/PokemonTypes/ghost.webp'
import grassIcon from '../../assets/icons/Pokemon/PokemonTypes/grass.webp'
import groundIcon from '../../assets/icons/Pokemon/PokemonTypes/ground.webp'
import iceIcon from '../../assets/icons/Pokemon/PokemonTypes/ice.webp'
import normalIcon from '../../assets/icons/Pokemon/PokemonTypes/normal.webp'
import poisonIcon from '../../assets/icons/Pokemon/PokemonTypes/poison.webp'
import psychicIcon from '../../assets/icons/Pokemon/PokemonTypes/psychic.webp'
import rockIcon from '../../assets/icons/Pokemon/PokemonTypes/rock.webp'
import steelIcon from '../../assets/icons/Pokemon/PokemonTypes/steel.webp'
import waterIcon from '../../assets/icons/Pokemon/PokemonTypes/water.webp'




const PokemonCardTypesIcons = {
    bug:bugIcon,
    dark:darkIcon,
    dragon:dragonIcon,
    electric:electricIcon,
    fairy:fairyIcon,
    fighting:fightingIcon,
    fire:fireIcon,
    flying:flyingIcon,
    ghost:ghostIcon,
    grass:grassIcon,
    ground:groundIcon,
    ice:iceIcon,
    normal:normalIcon,
    poison:poisonIcon,
    psychic:psychicIcon,
    rock:rockIcon,
    steel:steelIcon,
    water:waterIcon
}
const pokemonCardIconImageStyle = {
    width:"18px",
    height:"18px",
    marginLeft:"3px"
}

const PokemonCardIconImage = ({pokemonType,customStyle,onClick}) => {


    return (
        <img src={PokemonCardTypesIcons[pokemonType]} 
        alt={pokemonType} 
        style={customStyle ? customStyle : pokemonCardIconImageStyle} 
        title={pokemonType}
        onClick={onClick ? onClick : null}
        className="PokemonCardIconImage"
        />
    )
}


export default PokemonCardIconImage


