import styled from 'styled-components'
import { breakpoints } from '../../styles'

type BannerContainerProps = {
  background: string
}

export const BannerContainer = styled.div<BannerContainerProps>`
  position: relative;
  height: 560px;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 2px;
  display: block;

  @media (max-width: ${breakpoints.sm}) {
    height: 300px;
  }
`

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  display: flex;
  align-items: flex-end;
`

export const OverlayContent = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
`

export const BannerContent = styled.div`
  width: 50%;

  h2 {
    font-size: 36px;
    color: #fff;
    margin-bottom: 16px;
  }

  p {
    display: flex;
    flex-direction: column;

    span:first-child {
      font-size: 14px;
      color: #ccc;
      text-decoration: line-through;
    }

    span:last-child {
      font-size: 20px;
      color: #fff;
      font-weight: bold;
    }
  }

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;

    h2 {
      font-size: 22px;
      margin-bottom: 8px;
    }
  }
`

export const TopContent = styled.div`
  position: absolute;
  top: 16px;
  left: 0;
  right: 0;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 32px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 0 16px;
  }
`

export const BannerAction = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: ${breakpoints.sm}) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 8px;
  }
`
