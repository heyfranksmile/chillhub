import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 10;
  box-shadow: 0px 5px 5px 2px rgba(1, 1, 1, 0.8);
`;

const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  width: 40px;
  height: 40px;
  text-align: center;
  border-bottom: 2px solid
    ${props => (props.current ? "#1dd1a1" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const Slink = styled(Link)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    {/* {console.log(pathname)} */}
    <List>
      <Item current={pathname === "/"}>
        <Slink to="/">Movies</Slink>
      </Item>
      <Item current={pathname === "/tv"}>
        <Slink to="/tv">TV</Slink>
      </Item>
      <Item current={pathname === "/search"}>
        <Slink to="/search">Search</Slink>
      </Item>
    </List>
  </Header>
));
