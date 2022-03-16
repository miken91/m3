import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import BaseballContextProvider from './BaseballContext';
import BaseballModel from './BaseballModel';
import PitcherHand from './PitcherHand';
import PitchOptions from './PitchOptions';
import RotationsPerSecond from './RotationsPerSecond';

export interface PitchRecognitionProps {}

const StyledPitchRecognition = styled.div`
  height: 400px
`;

const Toolbar = styled.div`
  display: flex;
  margin: 1em
`

export function PitchRecognition(props: PitchRecognitionProps) {
  return (
    <StyledPitchRecognition>
      <BaseballContextProvider>
        <Toolbar>
          <PitcherHand></PitcherHand>
          <RotationsPerSecond></RotationsPerSecond>
          <PitchOptions></PitchOptions>
        </Toolbar>
        <BaseballModel></BaseballModel>
      </BaseballContextProvider>
    </StyledPitchRecognition>
  );
}

export default PitchRecognition;