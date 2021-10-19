import 'minireset.css';
import 'modern-normalize/modern-normalize.css';
import { css, Global, withTheme } from '@emotion/react';
import React from 'react';

import { Base } from './elements/Base';

const GlobalStyles = withTheme(({ theme }) => (
  <Global
    styles={css`
      ${Base({ theme })}
    `}
  />
));

export default GlobalStyles;
