import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import getMovies from "../apis/useApiData";
// import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  const [form] = Form.useForm();
  const [movie, setMovie] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;

    setMovie(value);
  };

  return (
    <div>
      {console.log("MOVIE: ", movie)}
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Movie title"
          name="movieTitle"
          rules={[{ required: true, message: "Please input the movie title!" }]}
        >
          <Input placeholder="movie title" onChange={handleInputChange} />
        </Form.Item>

        <Form.Item>
          <Button
            onClick={() => getMovies(movie)}
            type="primary"
            htmlType="submit"
          >
            Search
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
