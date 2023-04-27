import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LoadingImg } from '@/assets/loading.svg';

export function Loading() {
  return (
    <LoadingSection>
      <LoadingImg alt="로딩중" />
    </LoadingSection>
  );
}

const LoadingSection = styled.section`
  width: 360px;
  height: 640px;
  background-color: #fff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;
