import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const ActionBar = styled(Navbar)`
  background-color: ${(props) => props.theme.actionBarBody};
  border-bottom: 3px solid ${(props) => props.theme.actionBarBorder};
  margin: 0px -15px 0px -15px;
`;
