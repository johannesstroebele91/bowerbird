import React from "react";
import { Table } from "antd";
import Title from "antd/es/typography/Title";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { AppWrapper } from "../../Wrapper";
import { Service } from "../../types";

const columnDefs: ColumnsType<Service> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: 150,
  },
  {
    title: "Date From",
    dataIndex: "dateFrom",
    key: "dateFrom",
    width: 80,
  },
  {
    title: "Date Until",
    dataIndex: "dateUntil",
    key: "dateUntil",
    width: 80,
  },
];

const services: Service[] = [
  {
    name: "Splicer Issues 920820",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
  {
    name: "Splicer Issues 72312",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: [],
  },
  {
    name: "Splicer Issues 23152",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
  {
    name: "Splicer Issues 23152",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
  {
    name: "Splicer Issues 23152",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
];

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (service: Service) => {
    navigate("/services/" + service.name.replace(/ /g, ""), {
      state: { service },
    });
  };

  return (
    <AppWrapper>
      <Title>Services</Title>
      <Table
        columns={columnDefs}
        dataSource={services}
        showHeader={false}
        pagination={false}
        onRow={(service) => ({
          onClick: () => handleRowClick(service),
        })}
      />
    </AppWrapper>
  );
};
