import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

const Anchor = styled.a`
  font-size: 100px;
`

export default () => (
  <>
    <Container>
      <Link href="/top">
        <a>入り口</a>
      </Link>
    </Container>
  </>
)
