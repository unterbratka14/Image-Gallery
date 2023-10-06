import { useEffect, useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const key = import.meta.env.VITE_APP_PIXABAY_API_KEY;

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${key}&q=${term}&image_type=photo&pretty=true`
    )
      .then((response) => response.json())
      .then((data) => setImages(data.hits), setIsLoading(false))
      .catch((error) => console.log(error));
  }, [key, term]);

  return (
    <>
      <div className="w-[1240px] h-full mx-auto my-10">
        <ImageSearch searchText={(text) => setTerm(text)} />

        {!isLoading && images.length === 0 && (
          <h1 className="text-3xl text-center mx-auto">No Images Found...</h1>
        )}

        {isLoading ? (
          <h1>Is Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {images.map((element) => (
              <ImageCard key={element.id} image={element} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
