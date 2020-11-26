import React from "react";
import { StyledFilter, StyledButton } from "./filters.style";
import { Input, Slider, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const Filters = () => {
  return (
    <StyledFilter>
      <div>
        <Search placeholder="Enter name" style={{ width: 200 }} />
        <Select
          defaultValue="name"
          placeholder="Sort by"
          style={{ width: 120 }}
          allowClear
        >
          <Option value="name">name</Option>
          <Option value="duration">duration</Option>
          <Option value="count of people">count of people</Option>
        </Select>
        Prise range:
        <Slider
          range
          defaultValue={[20, 100]}
          max="300"
          step="10"
          style={{ width: 200 }}
        />
      </div>
      <StyledButton type="primary">Apply</StyledButton>
    </StyledFilter>
  );
};

export default Filters;
