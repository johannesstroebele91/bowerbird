import React, { useState } from "react";
import { Button, List } from "antd";
import { AppWrapper } from "../../Wrapper";
import Title from "antd/es/typography/Title";
import { useLocation } from "react-router-dom";
import { Service as ServiceType } from "../../types";
import { Typography } from "antd";
import { NewActivity } from "./NewActivity";
const { Paragraph } = Typography;

export const Service: React.FC = () => {
  const location = useLocation();
  const service: ServiceType = location.state?.service;
  const [isEditable, setIsEditable] = useState(false);

  return (
    <AppWrapper>
      <Title>{service.serviceName}</Title>
      <List
        bordered
        dataSource={service.activities}
        style={{ background: "white" }}
        renderItem={(activity) => {
          return (
            <List.Item
              actions={
                isEditable
                  ? []
                  : [<Button onClick={() => setIsEditable(true)}>edit</Button>]
              }
            >
              {!isEditable && <Paragraph>{activity}</Paragraph>}
              {isEditable && (
                <NewActivity
                  activity={activity}
                  setIsEditable={setIsEditable}
                />
              )}
            </List.Item>
          );
        }}
      />
    </AppWrapper>
  );
};
