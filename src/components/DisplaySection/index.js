import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  DisplayCard,
  DisplayContainer,
  DisplayText,
  DisplayTextWrapper,
  DisplayWrapper,
} from "./DisplayElements";

const Display = () => {
  const url = "https://jsonplaceholder.typicode.com/albums/1/photos";
  const [images, setImages] = useState([]);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setImages(res.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <DisplayContainer>
      <DisplayWrapper>
        {images.length !== 0 && loading
          ? images.map((image) => (
              <DisplayCard
                key={image.id}
                style={{
                  backgroundImage: `url(${image.thumbnailUrl})`,
                  backgroundSize: "cover",
                }}
                onClick={() => {history.push(`/detail/${image.id}`);}}
              >
                <DisplayTextWrapper>
                  <DisplayText>{image.title}</DisplayText>
                </DisplayTextWrapper>
              </DisplayCard>
            ))
          : ""}
      </DisplayWrapper>
    </DisplayContainer>
  );
};

export default Display;
