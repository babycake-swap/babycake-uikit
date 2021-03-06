import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed, theme }) => (isPushed ? (theme.isDark ? theme.colors.textSubtle : '#1E2436') : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "10px 52px" : "10px 36px")};
  font-size: ${({ secondary }) => (secondary ? "18px" : "19px")};
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  // background-color: ${({ secondary, theme }) => (theme.isDark ? theme.colors.background : "transparent")};
  color: ${({ theme }) => theme.isDark ? theme.colors.textSubtle : "#1E2436"};
  // box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    background-color: ${({ isActive, theme }) => (isActive ? "#FFFFFF" : "transparent")};
    border-radius: 6px;
    padding: ${({ secondary }) => (secondary ? "8px 15px" : "8px 5px")};
  }

  svg:first-child {
    // fill: ${({ theme }) => theme.isDark ? theme.colors.textSubtle : '#1E2436'};
    fill: none;
  }

  svg:last-child {
    fill: ${({ theme }) => theme.isDark ? theme.colors.textSubtle : '#1E2436'};
  }

  &:hover {
    a {
      background-color: #FFFFFF;
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkStatus = styled(Text) <{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
