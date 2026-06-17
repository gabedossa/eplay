import {
  BannerContainer,
  Overlay,
  OverlayContent,
  TopContent,
  BannerContent,
  BannerAction
} from './styles'
import Tag from '../Tag'
import Button from '../Button'
import bannerHomemAranha from '../../assets/images/banner-homem-aranha.png'

const Banner = () => {
  return (
    <BannerContainer background={bannerHomemAranha}>
      <TopContent>
        <Tag label="Destaque do dia" />
      </TopContent>
      <Overlay>
        <OverlayContent>
          <BannerContent>
            <h2>Marvel&apos;s Spider-Man: Miles Morales PS4 &amp; PS5</h2>
            <p>
              <span>De R$ 250,00</span>
              <span>por apenas R$ 99,90</span>
            </p>
          </BannerContent>
          <BannerAction>
            <Button type="button" title="Aproveitar" />
          </BannerAction>
        </OverlayContent>
      </Overlay>
    </BannerContainer>
  )
}

export default Banner
