import React from 'react';
import { ReactComponent as LoadingImg } from '@/assets/loading.svg';
import StyledSection from '../Styled/StyledSection';

export function Loading() {
  return (
    <StyledSection>
      <LoadingImg alt="로딩중" />
    </StyledSection>
  );
}
