import styled from "styled-components";
import { Navbar, Modal, Card, Button } from "react-bootstrap";
import { ContextMenu } from "react-contextmenu";

export const ActionBar = styled(Navbar)`
  background-color: ${(props) => props.theme.actionBarBody};
  border-top: 2px solid ${(props) => props.theme.actionBarBorder};
  border-bottom: 2px solid ${(props) => props.theme.actionBarBorder};
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

export const ThemedFormCard = styled(Card)`
  color: ${(props) => props.theme.formText};
  background-color: ${(props) => props.theme.formBody};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  text-align: center;

  border-style: groove;
  border-color: ${(props) => props.theme.formBorder};
  border-width: 0.25rem;
`;

export const NormalButton = styled(Button)`
  background-color: ${(props) => props.theme.normalButtonBackground};
  color: ${(props) => props.theme.normalButtonText};
  &:hover {
    background-color: ${(props) => props.theme.normalButtonBackgroundHover};
  }
`;
