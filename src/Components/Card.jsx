// import React from "react";

// const Card = ({ pokemon, loading, infoPokemon, lastPokemonElementRef }) => {
//     return (
//         <>
//             {loading && pokemon.length === 0 ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 pokemon.map((item, index) => {
//                     if (pokemon.length === index + 1) {
//                         return (
//                             <div 
//                                 className="card" 
//                                 key={item.id} 
//                                 ref={lastPokemonElementRef}
//                                 onClick={() => infoPokemon(item)}
//                             >
//                                 <h2>{item.id}</h2>
//                                 <img src={item.sprites.front_default} alt={item.name} />
//                                 <h2>{item.name}</h2>
//                             </div>
//                         );
//                     } else {
//                         return (
//                             <div 
//                                 className="card" 
//                                 key={item.id} 
//                                 onClick={() => infoPokemon(item)}
//                             >
//                                 <h2>{item.id}</h2>
//                                 <img src={item.sprites.front_default} alt={item.name} />
//                                 <h2>{item.name}</h2>
//                             </div>
//                         );
//                     }
//                 })
//             )}
//         </>
//     );
// };

// export default Card;




import React, { useState } from "react";

const Card = ({ pokemon, loading, infoPokemon, lastPokemonElementRef }) => {
    const [playingAudio, setPlayingAudio] = useState(null);

    const playSound = (id, event) => {
        event.stopPropagation(); // Prevent the card's onClick from firing
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