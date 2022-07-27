// Write your Character component here
import axios from "axios";

export default function Character({characters}){
    const {name, gender, mass, height, films } = 
    characters;


    return(
        <div>
            <h3>{name}</h3>
            <div>
                <p>Films: {films.length}</p>
                <p>Gender: {gender}</p>
                <p>Mass: {mass}kg</p>
                <p>Height: {height}cm</p>
            </div>
        </div>
    )
    // console.log("props,", props);
    // const characters = props.characters.map((character) => {
    //     return (<div>{`A test div featuring the one and only ${character.mass}kg ${character.name}, a ${character.height}cm tall ${character.gender} with ${character["hair_color"]} hair and ${character["eye_color"]} eyes. `}</div>)
    // })


    // const character = props.characters[0];
    // return <div>{`A test div featuring the one and only ${character.mass}kg ${character.name}, a ${character.height}cm tall ${character.gender} with ${character["hair_color"]} hair and ${character["eye_color"]} eyes. `}</div>
}