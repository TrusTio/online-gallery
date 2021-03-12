import styled from "styled-components";
import { Navbar } from "react-bootstrap";
import { ContextMenu } from "react-contextmenu";

export const ActionBar = styled(Navbar)`
  background-color: ${(props) => props.theme.actionBarBody};
  border-bottom: 3px solid ${(props) => props.theme.actionBarBorder};
  margin: 0px -15px 0px -15px;
`;

export const CustomContextMenu = styled(ContextMenu)`
  background-color: ${(props) => props.theme.contextMenuBackground};
  color: ${(props) => props.theme.contextMenuText};
`;
