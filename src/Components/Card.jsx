import React, { useState } from "react";

const Card = ({ pokemon, loading, infoPokemon, lastPokemonElementRef }) => {
    const [playingAudio, setPlayingAudio] = useState(null);

    const playSound = (id, event) => {
        event.stopPropagation();
        if (playingAudio) {
            playingAudio.pause();
            playingAudio.currentTime = 0;
        }
        const audio = new Audio(`https://pokemoncries.com/cries-old/${id}.mp3`);
        audio.play();
        setPlayingAudio(audio);
    };

    return (
        <>
            {loading && pokemon.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                pokemon.map((item, index) => {
                    const cardContent = (
                        <>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.front_default} alt={item.name} />
                            <h2>{item.name}</h2>
                            <div className="pokemon-types">
                                {item.types.map(typeInfo => (
                                    <span key={typeInfo.type.name} className={`type ${typeInfo.type.name}`}>
                                        {typeInfo.type.name}
                                    </span>
                                ))}
                            </div>
                            <button 
                                className="sound-button" 
                                onClick={(e) => playSound(item.id, e)}
                            >
                                🔊
                            </button>
                        </>
                    );

                    if (pokemon.length === index + 1) {
                        return (
                            <div 
                                className="card" 
                                key={item.id} 
                                ref={lastPokemonElementRef}
                                onClick={() => infoPokemon(item)}
                            >
                                {cardContent}
                            </div>
                        );
                    } else {
                        return (
                            <div 
                                className="card" 
                                key={item.id} 
                                onClick={() => infoPokemon(item)}
                            >
                                {cardContent}
                            </div>
                        );
                    }
                })
            )}
        </>
    );
};

export default Card;
