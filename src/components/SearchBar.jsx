import React, { useState } from "react";
import { Form, Input, Button } from "antd";
// import { SearchOutlined } from "@ant-design/icons";

export default function SearchBar() {
  const [form] = Form.useForm();
  const [movie, setMovie] = useState("");
  return (
    <div>
      <Form name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Movie title"
          name="movieTitle"
          rules={[{ required: true, message: "Please input the movie title!" }]}
        >
          <Input placeholder="movie title" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
