import React, { useContext, useState } from "react";
import { StyledFilter, StyledButton } from "./filters.style";
import { Input, Slider, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ItemMeta } from "semantic-ui-react";
import MyContext from "../../../Context/context";

const { Search } = Input;
const { Option } = Select;

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const Filters = ({ textValue = 0 }) => {
  const { data } = useContext(MyContext);

  const setSearchValueFunction = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const getMax = () => {
    return Object.values(data).reduce(function (max, current) {
      return Math.max(max, current.price);
    }, 0);
  };
  const getComporator = (optionValue) => {
    let comporator;
    if (optionValue == "name") {
      comporator = (a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      };
    } else if (optionValue == "duration") {
      comporator = (a, b) => {
        return a.duration - b.duration;
      };
    } else if (optionValue == "max_count") {
      comporator = (a, b) => {
        return a.countOfPeople - b.countOfPeople;
      };
    }
    return comporator;
  };

  const [optionValue, setOptionValue] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState([0, getMax()]);

  return (
    <MyContext.Consumer>
      {({ dataArr, updataArr, sortArr }) => (
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
              <Option value="duration">duration</Option>
              <Option value="max_count">count of people</Option>
            </Select>
            Prise range:
            <Slider
              range
              defaultValue={[0, getMax()]}
              max={getMax()}
              style={{ width: 200 }}
              onChange={(value) => setPriceRangeValue(value)}
            />
          </div>
          <StyledButton
            type="primary"
            onClick={() => {
              let arr = Object.values(data).filter(
                (item) =>
                  item.title.toLowerCase().includes(searchValue) &&
                  item.price >= priceRangeValue[0] &&
                  item.price <= priceRangeValue[1]
              );
              updataArr(arr);
              let comporator;
              if (optionValue != undefined) {
                let comporator = getComporator(optionValue);
                sortArr(arr, comporator);
              }
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
