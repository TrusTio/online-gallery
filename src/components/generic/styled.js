import styled from "styled-components";
import { Navbar, Modal } from "react-bootstrap";
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

export const ThemedModal = styled(Modal)`
  padding: 1px;
  width: 100%;
  margin: 1px;
  text-align: center;
`;

export const ThemedModalHeader = styled(ThemedModal.Header)`
  background-color: ${(props) => props.theme.modalBody};
`;

export const ThemedModalBody = styled(ThemedModal.Body)`
  background-color: ${(props) => props.theme.modalBody};
`;
