import { render } from '@testing-library/react';

import PitchRecognition from './pitch-recognition';

describe('PitchRecognition', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PitchRecognition />);
    expect(baseElement).toBeTruthy();
  });
});
