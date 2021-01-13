import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import getMovies from "../apis/useApiData";
// import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar({ movieList, setMovieList }) {
  const [form] = Form.useForm();

  const [movieTitle, setMovieTitle] = useState("");

  console.log("LIST: ", movieList);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;

    setMovieTitle(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies(movieTitle)
      .then((result) => {
        console.log("RESULT: ", result);
        setMovieList(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Movie title"
          name="movieTitle"
          rules={[{ required: true, message: "Please input the movie title!" }]}
        >
          <Input placeholder="movie title" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
