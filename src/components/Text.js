import React, { forwardRef } from 'react';
import styled from 'styled-components';
import range from 'lodash/range';
import {
  typography,
  space,
  color,
  display,
  position,
} from 'styled-system';
import tag from 'clean-tag';

import blacklist from './utils/blacklist';
import injectProps from './utils/injectProps';
import { responsive } from './ThemeProvider/theme';

const Text = styled(tag)`
  margin-top: 0;
  margin-bottom: 0;
  ${typography}
  ${display}
  ${space}
  ${color}
  ${position}
  ${injectProps('textTransform')}
  ${injectProps('whiteSpace')}
`;

Text.defaultProps = {
  is: 'p',
  fontSize: responsive('1.15em', '1.25em'),
  lineHeight: 1.5,
  letterSpacing: '0.1em',
  blacklist,
};

Text.inline = (props) => <Text is="span" {...props} />;
Text.bold = (props) => <Text fontWeight="bold" {...props} />;
Text.thin = (props) => <Text fontWeight="200" {...props} />;
Text.Desc = (props) => <Text fontSize={responsive('1.8rem', '2.4rem')} {...props} />;
Text.Title = forwardRef((props, ref) => <Text ref={ref} fontWeight="bold" color="darkGreen" fontSize={responsive('1.85em', '2.86em')} {...props} />)
Text.SubTitle = forwardRef((props, ref) => <Text.Title ref={ref} color="titleBlue" fontSize={responsive('1.428em', '1.875em')} {...props} />)

range(1, 7).forEach((key) => {
  const h = `h${key}`;
  Text[h] = (props) => (
    <Text
      is={h}
      fontSize={`${1 + ((6 - key) * 0.125)}em`}
      {...props}
    />
  );
});

Text.displayName = 'Text';

export default Text;
