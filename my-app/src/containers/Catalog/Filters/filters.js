import React, { useContext, useState, useEffect } from "react";
import { StyledFilter, StyledButton } from "./filters.style";
import { Input, Slider, Select } from "antd";
import MyContext from "../../../Context/context";
import API from "../../../APImanager/apimanager";

const { Option } = Select;

const Filters = () => {
  const { updataArr } = useContext(MyContext);

  const [optionValue, setOptionValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState([0, 5000]);

  const load = () => {
    async function getData() {
      let userData = await API.get(
        "/children-event?min=" +
          priceRangeValue[0] +
          "&max=" +
          priceRangeValue[1] +
          "&sortBy=" +
          optionValue
      );
      let arr = userData.data.filter((item) =>
        item.name.toLowerCase().includes(searchValue)
      );
      updataArr(arr);
      console.log(userData);
    }
    updataArr([]);
    setTimeout(() => {
      getData();
    }, 1000);
  };

  useEffect(load, []);

  return (
    <MyContext.Consumer>
      {() => (
        <StyledFilter>
          <div>
            <Input
              placeholder="Enter name"
              style={{ width: 200 }}
              onChange={(e) => {
                setSearchValue(e.target.value.toLowerCase());
              }}
            />
            <Select
              placeholder="Sort by"
              style={{ width: 120 }}
              allowClear
              onChange={(value) => setOptionValue(value)}
            >
              <Option value="name">name</Option>
              <Option value="duration_in_minutes">duration</Option>
              <Option value="max_quantity_of_children">count of people</Option>
            </Select>
            Prise range:
            <Slider
              range
              defaultValue={[0, 5000]}
              max={5000}
              style={{ width: 200 }}
              onChange={(value) => setPriceRangeValue(value)}
            />
          </div>
          <StyledButton
            type="primary"
            onClick={() => {
              load();
            }}
          >
            Apply
          </StyledButton>
        </StyledFilter>
      )}
    </MyContext.Consumer>
  );
};

export default Filters;
