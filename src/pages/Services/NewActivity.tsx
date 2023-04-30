import React, { useState } from "react";
import {
  Button,
  Col,
  Form,
  Row,
  Upload,
  UploadFile,
  UploadProps,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadChangeParam, RcFile } from "antd/es/upload";
import {
  AudioOutlined,
  CameraOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import { useQuery } from "react-query";
import axios from "axios";
import CheckableTag from "antd/es/tag/CheckableTag";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

interface IProps {
  activity: string;
  setIsEditable: any;
}

interface AutocompleteResponse {
  suggestions: string[];
}

export const NewActivity: React.FC<IProps> = ({ activity, setIsEditable }) => {
  const [text, setText] = useState<string>(activity);
  const [charactersWritten, setCharactersWritten] = useState<number>(0);

  const { data } = useQuery<AutocompleteResponse>(
    ["autocomplete", text],
    async () => {
      const response = await axios.post<AutocompleteResponse>(
        "http://18.198.242.3:8000/autocomplate_suggestions",
        { text: text }
      );
      return response.data;
    },
    {
      enabled: charactersWritten > 5,
    }
  );
  console.log(data);

  if (charactersWritten > 5) {
    setCharactersWritten(0);
  }

  const dataSuggestions = ["1. suggestion", "2. suggestion", "3. suggestion"];
  const [selectedSuggestion, setSelectedSuggestion] = useState<boolean>(false);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row>
        <Col span={18}>
          {/* {data?.suggestions} */}
          {dataSuggestions?.map((suggestion) => (
            <CheckableTag
              key={suggestion}
              checked={selectedSuggestion}
              onChange={(checked) => setSelectedSuggestion(!checked)}
              color={"default"}
            >
              {suggestion}
            </CheckableTag>
          ))}
          <Form.Item
            name="text"
            rules={[{ message: "Please describe your task" }]}
          >
            <TextArea
              placeholder="Please describe your task"
              autoSize={{ minRows: 2, maxRows: 6 }}
              value={text}
              onChange={(params) => {
                setCharactersWritten(charactersWritten + 1);
                setText(params.currentTarget.value);
              }}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
        <Col span={1} />
        <Col span={1}>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={() => setIsEditable(false)}
            >
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="photo" style={{ display: "inline-block" }}>
        <Button icon={<CameraOutlined />} style={{ marginRight: 12 }}>
          Click to take Photo
        </Button>
      </Form.Item>
      <Form.Item name="memo" style={{ display: "inline-block" }}>
        <Button icon={<AudioOutlined />}>Click to record Memo</Button>
      </Form.Item>
    </Form>
  );
};
