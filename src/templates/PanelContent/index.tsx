import React from 'react'

import * as S from './styles'

type PanelContentProps = {
  children: React.ReactNode
}

const PanelContent = ({ children }: PanelContentProps) => {
  return <S.Wrapper>{children}</S.Wrapper>
}

export default PanelContent
