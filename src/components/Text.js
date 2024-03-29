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
  fontSize: responsive('1.6em', '2em'),
  lineHeight: 1.5,
  blacklist,
};

Text.inline = (props) => <Text is="span" {...props} />;
Text.bold = (props) => <Text fontWeight="bold" {...props} />;
Text.thin = (props) => <Text fontWeight="200" {...props} />;
Text.Desc = (props) => <Text fontWeight="500" fontSize={responsive('1.75em', '2.15em')} {...props} />;
Text.Title = forwardRef((props, ref) => <Text ref={ref} fontWeight="900" color="titleBlue" fontSize={responsive('2.4em', '3.6em')} {...props} />)
Text.SubTitle = forwardRef((props, ref) => <Text.Title ref={ref} fontWeight="bold" color="darkGreen" fontSize={props.titleFontSize || responsive('2em', '2.8em')} {...props} />)
Text.ModuleTitle = forwardRef((props, ref) => <Text.Title ref={ref} fontWeight="bold" {...props} />)
Text.SmallTitle = forwardRef((props, ref) => <Text ref={ref} fontWeight="bold" fontSize={responsive('1.8em', '2.4em')} {...props} />)

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
