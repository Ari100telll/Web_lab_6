import React, { useContext, useState } from "react";
import { StyledFilter, StyledButton } from "./filters.style";
import { Input, Slider, Select, Spin } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ItemMeta } from "semantic-ui-react";
import MyContext from "../../../Context/context";
import API from "../../../APImanager/apimanager";
import {SpinBlock} from "../../App/App.styles";


const { Search } = Input;
const { Option } = Select;

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const Filters = ({ textValue = 0 }) => {

  const { data, updataArr} = useContext(MyContext);

  const setSearchValueFunction = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const [maxx, setMaxx] = useState();
  const [optionValue, setOptionValue] = useState('');
  const [searchValue, setSearchValue] = useState("");
  const [priceRangeValue, setPriceRangeValue] = useState([0, maxx]);

  const load = () => {
    async function getData() {
      let userData = await API.get("/children-event?min="+ priceRangeValue[0] +"&max=" + priceRangeValue[1] + "&sortBy=" + optionValue);
      let arr = userData.data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchValue));
      updataArr(arr);
      setMaxx(data.reduce(function (max, current) {
        return Math.max(max, current.price_in_uah);
      }, 0))
      console.log(data);
    }
    getData();
  };

  return (
    <MyContext.Consumer>
      {({ data, updataArr }) => (
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
