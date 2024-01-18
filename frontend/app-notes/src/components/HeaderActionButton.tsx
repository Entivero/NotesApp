import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";

const StyledButton = styled.button`
border-radius: 7px;
background: #645ca2;
text-transform: uppercase;
color: #fff;
`

const HeaderActionButton = (props) => {
    const { showCreateNoteModal } = useContext(ModalContext);
    return <StyledButton onClick={showCreateNoteModal}>New Note</StyledButton>;
};
export default HeaderActionButton