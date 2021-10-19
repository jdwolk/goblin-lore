// Add any 'mixins' or global functions that are relevant to styles only

import { css } from '@emotion/react';

export const styleUtils = {
  pillContainerStyle: ({ theme }) => css`
    background: ${theme.backgroundColor.mid};
    border-radius: ${theme.borders.default.radius};
    border: ${theme.borders.input};
    padding: ${theme.padding.input.all};
  `,
};

export const fullHeight = () => 'height: 100%;';

export const fullWidth = () => `width: 100%;`;

export const defaultBorder = ({ theme }) =>
  `${theme.borders.default.attrs} ${theme.borders.default.color}`;

export const linkStyle = ({ theme }) =>
  `
    color: ${theme.colors.greyDark3};
    cursor: pointer;
    text-decoration: underline;
    &:visited {
      color: ${theme.colors.blueMedium};
    }
  `;

export const headerStyle = ({ theme }) =>
  `
    color: ${theme.textColor.default};
  `;
