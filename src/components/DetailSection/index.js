import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer, DetailWrapper } from "./DetailElements";

const Detail = () => {
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/albums/1/${params.id}`;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <DetailContainer>
        {details.length !== 0
          ? details.map((detail) => {
              <DetailWrapper
                style={{
                  backgroundImage: `url(${detail.url})`,
                  backgroundSize: "cover",
                }}
              />;
            })
          : ""}
      </DetailContainer>
    </>
  );
};

export default Detail;
