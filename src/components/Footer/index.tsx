import {
  FooterContainer,
  FooterContent,
  FooterBrand,
  FooterSection,
  FooterBottom,
  SocialLinks,
  PaymentMethods
} from './styles'
import { Container } from '../../styles'
import logo from '../../assets/images/logo.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterBrand>
            <img src={logo} alt="Eplay" />
            <p>
              A Eplay é sua loja de jogos digitais com os melhores títulos do
              mercado. Aqui você encontra lançamentos, promoções exclusivas e
              pré-vendas com preços imbatíveis. Jogue mais, pague menos.
            </p>
            <PaymentMethods>
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Pix</span>
              <span>Boleto</span>
              <span>PayPal</span>
            </PaymentMethods>
          </FooterBrand>

          <FooterSection>
            <h4>Categorias</h4>
            <ul>
              <li>RPG</li>
              <li>Ação e Aventura</li>
              <li>Esportes</li>
              <li>Simulação</li>
              <li>Terror e Survival</li>
              <li>Corrida</li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>A Empresa</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Trabalhe conosco</li>
              <li>Blog</li>
              <li>Imprensa</li>
              <li>Afiliados</li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Suporte</h4>
            <ul>
              <li>Central de Ajuda</li>
              <li>Trocas e Devoluções</li>
              <li>Política de Privacidade</li>
              <li>Termos de Uso</li>
              <li>Fale Conosco</li>
            </ul>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <p>
            © 2024 Eplay Jogos Digitais Ltda. — CNPJ 12.345.678/0001-99 — Todos
            os direitos reservados.
          </p>
          <SocialLinks>
            <a href="#">Instagram</a>
            <a href="#">Twitter / X</a>
            <a href="#">YouTube</a>
            <a href="#">Discord</a>
          </SocialLinks>
        </FooterBottom>
      </Container>
    </FooterContainer>
  )
}

export default Footer
