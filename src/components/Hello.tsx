import { css, jsx } from '@emotion/core';
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
  let test = 'test';
  const { compiler, framework } = props;
  return (
    <div css={{ color: 'red' }}>
      Hello from
      {compiler}
      and
      {framework}! It works!!!!
    </div>
  );
}
