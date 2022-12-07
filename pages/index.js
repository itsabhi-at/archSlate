import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Home.module.css";
import { useGetPokemonByNameQuery } from "./services/pokeapi";
import { increment, incrementByAmount } from "./slice/counterSlice";

export default function Home() {
  const dispatch = useDispatch();
  let { value } = useSelector((state) => state.counter);
  const { data, error, isLoading } = useGetPokemonByNameQuery("charizard");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </div>
  );
}
