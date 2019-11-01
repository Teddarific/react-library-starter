import { css } from '@emotion/core';
import * as React from 'react';

const styles = {
  root: css({
    color: 'red',
  }),
};

export interface HelloProps {
  compiler: string;
  framework: string;
}

export default function Hello(props: HelloProps) {
  const { compiler, framework } = props;
  return (
    <div css={styles.root}>
      Hello from
      {compiler}
      and
      {framework}! It works!!!!
    </div>
  );
}
