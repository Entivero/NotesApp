import HeaderActionButton from "./HeaderActionButton";
import HeaderTitle from "./HeaderTitle";
import styled from "styled-components";

const HeaderWrapper = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`;


const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle/>
            <HeaderActionButton/>
        </HeaderWrapper>
    )
};

export default Header;
