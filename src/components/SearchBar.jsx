import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import getMovies from "../apis/useApiData";

export default function SearchBar({ movieList, setMovieList }) {
  const [movieTitle, setMovieTitle] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const title = target.value;

    setMovieTitle(title);

    getMovies(title)
      .then((result) => {
        setMovieList(result);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("movieTitle: ", title);
    console.log("movieList: ", movieList);
  };

  return (
    <div>
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Movie title"
          name="movieTitle"
          rules={[{ required: true, message: "Please input the movie title!" }]}
        >
          <Input
            placeholder="search by movie title"
            onChange={handleInputChange}
          />
        </Form.Item>
      </Form>
    </div>
  );
}
