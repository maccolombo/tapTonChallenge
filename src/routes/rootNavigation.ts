import * as React from 'react';

interface Inavigate {
  name: string;
  params: object;
}

export const navigationRef = React.createRef();

export function navigate(name: Inavigate, params?: Inavigate | undefined) {
  navigationRef.current?.navigate(name, params);
}