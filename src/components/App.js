import React, { useState, useEffect } from "react";
export default function App() {
    const [randImage, setImage]= useState("")
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setImage(data.message);
            setIsLoaded(true);
          });
    }, []);
    if (!isLoaded) return <h3>Loading...</h3>;
    return (
        <p><img src={randImage} alt="A Random Dog"/></p>
    )
}
 