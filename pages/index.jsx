import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Anchor = styled.a`
  font-size: 100px;
`

export default () => (
  <>
    <Link href="/top">
      <a>入り口</a>
    </Link>
  </>
)
