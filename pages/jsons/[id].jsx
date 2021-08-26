// import  from "next/dist/client/router";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../../styles/Json.module.css";

const Json = ({ albums = [] }) => {
  const router = useRouter();
  const { id } = router.query;
  // const [albums, setAlbums] = useState([]);

  // useEffect(async () => {
  //   setAlbums(
  //     await fetch("https://jsonplaceholder.typicode.com/albums")
  //       .then((res) => res.json())
  //       .then((res) => res)
  //   );
  // }, []);

  return (
    <div className={styles.main}>
      <h1 className={styles._tmp}>Jsonnnnnnnnnnnnnnnnn: {id}</h1>
      <button onClick={(ev) => Router.back()}>Back</button>
      <ul className={styles.myList}>
        {albums.map((it1, idx1) => {
          return (
            <div key={idx1} className={styles.listItem}>
              <span style={{ fontWeight: "900" }}>{idx1}&nbsp;</span>
              <small>{JSON.stringify(it1)}</small>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Json;

export async function getServerSideProps({ params }) {
  console.log("getServerSideProps: ", params);

  return {
    props: {
      albums: await fetch("https://jsonplaceholder.typicode.com/albums")
        .then((res) => res.json())
        .then((res) => res),
    },
  };
}
// export async function getStaticProps({ params }) {
//   console.log("getStaticProps");

//   return {
//     props: {
//       albums: await fetch("https://jsonplaceholder.typicode.com/albums")
//         .then((res) => res.json())
//         .then((res) => res),
//     },
//   };
// }

// export async function getStaticPaths() {
//   console.log("getStaticPaths");
//   const data = await fetch("https://jsonplaceholder.typicode.com/albums")
//     .then((res) => res.json())
//     .then((res) => res);

//   const paths = data.map((it) => {
//     return { params: { id: "" + it.id } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// }
