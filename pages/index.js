import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
} from "./services/pokeapi";
import { increment, incrementByAmount } from "./slice/counterSlice";

export default function Home() {
  const [Name, setName] = useState("raticate");
  const dispatch = useDispatch();
  let { value } = useSelector((state) => state.counter);
  const { data, error, isLoading } = useGetPokemonByNameQuery(Name);
  const list = useGetPokemonListQuery();
  const [products, setProducts] = useState([
    {
      name: "iphone11",
      vote: 1,
    },
    {
      name: "iphone12",
      vote: 3,
    },
  ]);

  // functions
  const handleNameChange = (name) => {
    setName(name);
  };

  const upVoteHandler = (i) => {
    setProducts((prev) => {
      prev[i].vote = prev[i].vote + 1;
      console.log("vote", prev[i].vote);
      let newPrev = [...prev];
      return newPrev;
    });
  };
  const downVoteHandler = (i) => {
    setProducts((prev) => {
      prev[i].vote = prev[i].vote - 1;
      console.log("vote", prev[i].vote);
      let newPrev = [...prev];
      return newPrev;
    });
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div>this is {products}</div> */}
      {products?.map((product, i) => (
        <div key={i}>
          <div>{product.name}</div>
          <div>rating - {product.vote}</div>
          <button onClick={() => upVoteHandler(i)}>Up vote +</button>
          <button onClick={() => downVoteHandler(i)}>Down vote -</button>
        </div>
      ))}
      {/* <button onClick={() => increaseValue()}>add</button> */}

      <main>this is the count {value}</main>
      <button onClick={() => dispatch(increment())}>Add 1</button>
      <button onClick={() => dispatch(incrementByAmount(value))}>
        Adding value
      </button>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}

      {/* <div>
        {list?.data?.results.map((pokemon) => (
          <div key={pokemon.name}>
            <p onClick={() => handleNameChange(pokemon.name)}>{pokemon.name}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
