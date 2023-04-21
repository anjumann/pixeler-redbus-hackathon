import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const Firebase = () => {
  const [data, setData] = React.useState();

  const firebaseConfig = {
    apiKey: "AIzaSyDXIYtcCu10XMUZ7nPKUodqQV-7xNKij9U",
    authDomain: "pixeler-redbus-hackathon.firebaseapp.com",
    databaseURL: "https://pixeler-redbus-hackathon-default-rtdb.firebaseio.com",
    projectId: "pixeler-redbus-hackathon",
    storageBucket: "pixeler-redbus-hackathon.appspot.com",
    messagingSenderId: "628567971778",
    appId: "1:628567971778:web:e0e92143cf1a82c8c3685b",
    measurementId: "G-X0EGH4GER5",
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const imageRef = ref(database, "images");

  useEffect(() => {
    onValue(imageRef, (snapshot) => {
      const info = Object.values(snapshot.val());
      console.log(info);
      setData(info);
    });
  }, []);

  return (
    <>
      {data ? (
        <div>
          {data.map((item) => {
            return <img src={item} alt="img" />;
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Firebase;
