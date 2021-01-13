import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import getMovies from "../apis/useApiData";
// import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar({ movieList, setMovieList }) {
  // const [form] = Form.useForm();

  const [movieTitle, setMovieTitle] = useState("");

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const title = target.value;

    setMovieTitle(title);

    getMovies(title)
      .then((result) => {
        // console.log("RESULT: ", result);
        setMovieList(result);
        // form.resetFields();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("movieTitle: ", title);
    console.log("movieList: ", movieList);
  };

  return (
    <div>
      <Form
        // form={form}
        name="basic"
        initialValues={{ remember: true }}
      >
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
