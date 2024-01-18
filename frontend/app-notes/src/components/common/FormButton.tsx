import styled from "styled-components";

const FormButton = styled.button<{ cancel?: boolean }>`
  border-radius: 7px;
  background: ${(props) => (props.cancel ? "#F99417" : "#363062")};
  border: 1px solid ${(props) => (props.cancel ? "#F99417" : "#363062")};
  color: #fff;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;

  &:hover {
    border: 1px solid ${(props) => (props.cancel ? "#F99417" : "#363062")};
  }
`;

export default FormButton;