import React from "react";
import { Table } from "antd";
import Title from "antd/es/typography/Title";
import { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";
import { AppWrapper } from "../../Wrapper";
import { Service } from "../../types";

const columnDefs: ColumnsType<ServiceWithKey> = [
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
    serviceName: "Splicer Issues 920820",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
  {
    serviceName: "Splicer Issues 72312",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: [],
  },
  {
    serviceName: "Splicer Issues 23152",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
  {
    serviceName: "Splicer Issues 23152",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
  {
    serviceName: "Splicer Issues 23152",
    dateFrom: "Sat Apr 29 2023 20:30:38",
    dateUntil: "Sat Apr 29 2023 20:30:38",
    activities: ["Step 1", "Step 2", "Step 3"],
  },
];

interface ServiceWithKey extends Service {
  key: string;
}

const servicesWithKey = services.map((service, index) => ({
  ...service,
  key: `${index}`,
}));

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleRowClick = (service: Service) => {
    navigate("/services/" + service.serviceName.replace(/ /g, ""), {
      state: { service },
    });
  };

  return (
    <AppWrapper>
      <Title>Services</Title>
      <Table
        columns={columnDefs}
        dataSource={servicesWithKey}
        showHeader={false}
        pagination={false}
        onRow={(service) => ({
          onClick: () => handleRowClick(service),
        })}
      />
    </AppWrapper>
  );
};
