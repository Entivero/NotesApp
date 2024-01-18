import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 14px;
  width: 450px;
  border-radius: 10px;
  border: 1px solid #ddd;
  background-color: #f1f1f1;

  color: rgba(0, 0, 0, 0.6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`;

type Props = {
  onSearch: (value: string) => void;
};

const SearchInput = ({ onSearch }: Props) => {
  const [term, setTerm] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setTerm(value);
    onSearch(value);
  }

  return (
    <StyledInput
      type="text"
      placeholder="Search"
      value={term}
      onChange={handleChange}
    />
  );
};

export default SearchInput;