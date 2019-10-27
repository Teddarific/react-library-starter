/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const styles = css({
  backgroundColor: 'green',
});

const ExampleComponent = () => (
  <div id="example" css={styles}> This is an example component! </div>
);

export { ExampleComponent };
