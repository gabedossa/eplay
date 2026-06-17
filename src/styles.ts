import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEE',
  preto: '#111',
  cinza: '#333',
  verdeMain: '#10AC84',
  verdeEscuro: '#0d9471'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    background-color: ${cores.preto};
    color: ${cores.branca};
    padding-top: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const breakpoints = {
  sm: '768px',
  md: '1024px'
}
