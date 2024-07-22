import React from "react";

const Pokeinfo = ({ data }) => {
    if (!data) {
        return null;
    }

    const maxStat = 255; 

    return (
        <>
            <h1>{data.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
            <div className="abilities">
                {
                    data.abilities.map(poke => (
                        <div className="group" key={poke.ability.name}>
                            <h2>{poke.ability.name}</h2>
                        </div>
                    ))
                }
            </div>
            <div className="base-stat">
                {
                    data.stats.map(poke => (
                        <div className="stat-group" key={poke.stat.name}>
                            <div className="stat-name">{poke.stat.name}</div>
                            <div className="stat-value">{poke.base_stat}</div>
                            <div className="stat-bar-container">
                                <div 
                                    className="stat-bar" 
                                    style={{width: `${(poke.base_stat / maxStat) * 100}%`}}
                                ></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Pokeinfo;
