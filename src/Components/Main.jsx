// import React from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// const Main=()=>{
//     const [pokeData,setPokeData]=useState([]);
//     const [loading,setLoading]=useState(true);
//     const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
//     const [nextUrl,setNextUrl]=useState();
//     const [prevUrl,setPrevUrl]=useState();
//     const [pokeDex,setPokeDex]=useState();

//     const pokeFun=async()=>{
//         setLoading(true)
//         const res=await axios.get(url);
//         setNextUrl(res.data.next);
//         setPrevUrl(res.data.previous);
//         getPokemon(res.data.results)
//         setLoading(false)
//     }
//     const getPokemon=async(res)=>{
//        res.map(async(item)=>{
//           const result=await axios.get(item.url)
//           setPokeData(state=>{
//               state=[...state,result.data]
//               state.sort((a,b)=>a.id>b.id?1:-1)
              
//               return state;
//           })
//        })   
//     }
//     useEffect(()=>{
//         pokeFun();
//     },[url])
//     return(
//         <>
//         <div className="Topbar">
//             <p>
//             <img src="./images/pokeball.png" alt="pokeball image "></img>
//             <h1>Pokedex</h1>
//             </p>
//         </div>
//            <div className="container">
//             <
//                 <div className="left-content">
//                     <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>
                    
//                     {/* <div className="btn-group">
//                         {  prevUrl && <button onClick={()=>{
//                             setPokeData([])
//                            setUrl(prevUrl) 
//                         }}>Previous</button>}

//                         { nextUrl && <button onClick={()=>{
//                             setPokeData([])
//                             setUrl(nextUrl)
//                         }}>Next</button>}

//                     </div> */}
//                 </div>
//                 <div className="right-content">
//                    <Pokeinfo data={pokeDex}/>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Main;





// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component"
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import axios from "axios";

// const Main = () => {
//     const [pokeData, setPokeData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
//     const [nextUrl, setNextUrl] = useState();
//     const [prevUrl, setPrevUrl] = useState();
//     const [pokeDex, setPokeDex] = useState();

//     const pokeFun = async () => {
//         setLoading(true);
//         const res = await axios.get(url);
//         setNextUrl(res.data.next);
//         setPrevUrl(res.data.previous);
//         await getPokemon(res.data.results);
//         setLoading(false);
//     };

//     const getPokemon = async (res) => {
//         const pokemonData = await Promise.all(
//             res.map(async (item) => {
//                 const result = await axios.get(item.url);
//                 return result.data;
//             })
//         );

//         setPokeData(pokemonData.sort((a, b) => (a.id > b.id ? 1 : -1)));
        
//         // Set the first Pokemon as default if pokeDex is not set
//         if (!pokeDex && pokemonData.length > 0) {
//             setPokeDex(pokemonData[0]);
//         }
//     };

//     useEffect(() => {
//         pokeFun();
//     }, [url]);

//     return (
//         <>
//             <div className="Topbar">
//                 <p>
//                     <img src="./images/pokeball.png" alt="pokeball image" />
//                     <h1>Pokedex</h1>
//                 </p>
//             </div>
//             <div className="container">
//                 <div className="left-content">
//                     <Card
//                         pokemon={pokeData}
//                         loading={loading}
//                         infoPokemon={(poke) => setPokeDex(poke)}
//                     />
//                     <div className="btn-group">
//                        {  prevUrl && <button onClick={()=>{
//                             setPokeData([])
//                            setUrl(prevUrl) 
//                         }}>Previous</button>}

//                         { nextUrl && <button onClick={()=>{
//                             setPokeData([])
//                             setUrl(nextUrl)
//                         }}>Next</button>}

//                     </div>
//                 </div>
//                 <div className="right-content">
//                     <Pokeinfo data={pokeDex} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Main;




// import React, { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import axios from "axios";

// const Main = () => {
//     const [pokeData, setPokeData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
//     const [nextUrl, setNextUrl] = useState();
//     const [pokeDex, setPokeDex] = useState();

//     const pokeFun = async () => {
//         setLoading(true);
//         const res = await axios.get(url);
//         setNextUrl(res.data.next);
//         await getPokemon(res.data.results);
//         setLoading(false);
//     };

//     const getPokemon = async (res) => {
//         const pokemonData = await Promise.all(
//             res.map(async (item) => {
//                 const result = await axios.get(item.url);
//                 return result.data;
//             })
//         );

//         setPokeData(prevData => {
//             const newData = [...prevData, ...pokemonData].sort((a, b) => a.id - b.id);
//             return Array.from(new Set(newData.map(a => a.id)))
//                 .map(id => newData.find(a => a.id === id));
//         });
        
//         if (!pokeDex && pokemonData.length > 0) {
//             setPokeDex(pokemonData[0]);
//         }
//     };

//     useEffect(() => {
//         pokeFun();
//     }, []);

//     const fetchMorePokemon = () => {
//         if (nextUrl) {
//             setUrl(nextUrl);
//         }
//     };

//     return (
//         <>
//             <div className="Topbar">
//                 <p>
//                     <img src="./images/pokeball.png" alt="pokeball image" />
//                     <h1>Pokedex</h1>
//                 </p>
//             </div>
//             <div className="container">
//                 <div className="left-content">
//                     <InfiniteScroll
//                         dataLength={pokeData.length}
//                         next={fetchMorePokemon}
//                         hasMore={nextUrl !== null}
//                         loader={<h4>Loading...</h4>}
//                         scrollableTarget="left-content"
//                     >
//                         <Card
//                             pokemon={pokeData}
//                             loading={loading}
//                             infoPokemon={(poke) => setPokeDex(poke)}
//                         />
//                     </InfiniteScroll>
//                 </div>
//                 <div className="right-content">
//                     <Pokeinfo data={pokeDex} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Main;




// import React, { useState, useEffect, useRef, useCallback } from "react";
// import Card from "./Card";
// import Pokeinfo from "./Pokeinfo";
// import axios from "axios";

// const Main = () => {
//     const [pokeData, setPokeData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
//     const [nextUrl, setNextUrl] = useState(null);
//     const [pokeDex, setPokeDex] = useState();

//     const observer = useRef();
//     const lastPokemonElementRef = useCallback(node => {
//         if (loading) return;
//         if (observer.current) observer.current.disconnect();
//         observer.current = new IntersectionObserver(entries => {
//             if (entries[0].isIntersecting && nextUrl) {
//                 setUrl(nextUrl);
//             }
//         });
//         if (node) observer.current.observe(node);
//     }, [loading, nextUrl]);

//     const pokeFun = async () => {
//         setLoading(true);
//         const res = await axios.get(url);
//         setNextUrl(res.data.next);
//         await getPokemon(res.data.results);
//         setLoading(false);
//     };

//     const getPokemon = async (res) => {
//         const pokemonData = await Promise.all(
//             res.map(async (item) => {
//                 const result = await axios.get(item.url);
//                 return result.data;
//             })
//         );

//         setPokeData(prevData => {
//             const newData = [...prevData, ...pokemonData].sort((a, b) => a.id - b.id);
//             return Array.from(new Set(newData.map(a => a.id)))
//                 .map(id => newData.find(a => a.id === id));
//         });
        
//         if (!pokeDex && pokemonData.length > 0) {
//             setPokeDex(pokemonData[0]);
//         }
//     };

//     useEffect(() => {
//         pokeFun();
//     }, [url]);

//     return (
//         <>
//             <div className="Topbar">
//                 <p>
//                     <img src="./images/pokeball.png" alt="pokeball image" />
//                     <h1>Pokedex</h1>
//                 </p>
//             </div>
//             <div className="container">
//                 <div className="left-content">
//                     <Card
//                         pokemon={pokeData}
//                         loading={loading}
//                         infoPokemon={(poke) => setPokeDex(poke)}
//                         lastPokemonElementRef={lastPokemonElementRef}
//                     />
//                     {loading && <h2>Loading more Pokémon...</h2>}
//                 </div>
//                 <div className="right-content">
//                     <Pokeinfo data={pokeDex} />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Main;



import React, { useState, useEffect, useRef, useCallback } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState(null);
    const [pokeDex, setPokeDex] = useState();
    const [searchTerm, setSearchTerm] = useState("");
    const [allPokemon, setAllPokemon] = useState([]);

    const observer = useRef();
    const lastPokemonElementRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && nextUrl) {
                setUrl(nextUrl);
            }
        });
        if (node) observer.current.observe(node);
    }, [loading, nextUrl]);

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        await getPokemon(res.data.results);
        setLoading(false);
    };

    const getPokemon = async (res) => {
        const pokemonData = await Promise.all(
            res.map(async (item) => {
                const result = await axios.get(item.url);
                return result.data;
            })
        );

        setPokeData(prevData => {
            const newData = [...prevData, ...pokemonData].sort((a, b) => a.id - b.id);
            return Array.from(new Set(newData.map(a => a.id)))
                .map(id => newData.find(a => a.id === id));
        });
        
        setAllPokemon(prevAll => {
            const newAll = [...prevAll, ...pokemonData].sort((a, b) => a.id - b.id);
            return Array.from(new Set(newAll.map(a => a.id)))
                .map(id => newAll.find(a => a.id === id));
        });
        
        if (!pokeDex && pokemonData.length > 0) {
            setPokeDex(pokemonData[0]);
        }
    };

    useEffect(() => {
        pokeFun();
    }, [url]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const filteredPokemon = allPokemon.filter(pokemon => 
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setPokeData(filteredPokemon);
    }, [searchTerm, allPokemon]);

    return (
        <>
            <div className="Topbar">
                <p>
                    <img src="./images/pokeball.png" alt="pokeball image" />
                    <h1>Pokedex</h1>
                </p>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Pokémon"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="search-input"
                    />
                </div>
            </div>
            <div className="container">
                <div className="left-content">
                    <Card
                        pokemon={pokeData}
                        loading={loading}
                        infoPokemon={(poke) => setPokeDex(poke)}
                        lastPokemonElementRef={lastPokemonElementRef}
                    />
                    {loading && <h2>Loading more Pokémon...</h2>}
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>
        </>
    );
};

export default Main;