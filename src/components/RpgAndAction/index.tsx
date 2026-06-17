import { useState } from 'react'
import {
  Section,
  SectionTitle,
  Games,
  Game,
  GameImageWrapper,
  GameImage,
  GameInfo
} from './styles'
import { Container } from '../../styles'
import Modal, { GameDetails } from '../Modal'
import Tag from '../Tag'
import diabloImg from '../../assets/images/diablo.png'
import starWarsImg from '../../assets/images/star_wars.png'
import zeldaImg from '../../assets/images/zelda.png'
import hogwartsImg from '../../assets/images/fundo_hogwarts.png'
import milesImg from '../../assets/images/banner-homem-aranha.png'

type TagVariant = 'promocao' | 'lancamento' | 'pre-venda'

type GameWithTag = GameDetails & { tag: TagVariant; tagLabel: string }

const games: GameWithTag[] = [
  {
    id: 1,
    title: 'Diablo IV',
    oldPrice: 'R$ 299,90',
    newPrice: 'R$ 199,90',
    image: diabloImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/8512b560be0ddef49cb0da366b7d2ddf5df18cab/ss_8512b560be0ddef49cb0da366b7d2ddf5df18cab.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/24952fc1c8779c9a7a555c01489c76f9814f70a7/ss_24952fc1c8779c9a7a555c01489c76f9814f70a7.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/7eda1d661ffde2750d56517e1a46406f340675e5/ss_7eda1d661ffde2750d56517e1a46406f340675e5.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/38d64c37bf2e84bbec5138cf114529eada712ebc/ss_38d64c37bf2e84bbec5138cf114529eada712ebc.1920x1080.jpg'
    ],
    tag: 'lancamento',
    tagLabel: 'Lançamento',
    description:
      'Retorne às trevas em Diablo IV, o mais recente capítulo da icônica série de ação RPG. Explore um mundo sombrio e vasto cheio de masmorras perigosas, enfrente hordas de demônios e lute para salvar Sanctuary de Lilith, filha do Ódio.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-4670K ou AMD Ryzen 1300X',
      memory: '8 GB RAM',
      gpu: 'NVIDIA GeForce GTX 970 ou AMD Radeon RX 470',
      storage: '90 GB'
    }
  },
  {
    id: 2,
    title: 'Star Wars Jedi: Survivor',
    oldPrice: 'R$ 249,90',
    newPrice: 'R$ 149,90',
    image: starWarsImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/ss_e589d6bb347c13f7226f0b294fd12880ced8d171.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/ss_6f2e72d773e4280f3a4860c7fb1d62e72932a9b0.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/ss_f14055548a6c51171036ebb3d00ddf5c97e5bd05.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/ss_bb84b8cbf9294c6166819c3d3328c4efbdb9d46c.1920x1080.jpg'
    ],
    tag: 'pre-venda',
    tagLabel: 'Pré-venda',
    description:
      'Cal Kestis continua sua jornada em Star Wars Jedi: Survivor. Cinco anos após os eventos de Fallen Order, Cal deve sobreviver em uma galáxia cada vez mais hostil, enfrentando o Império e descobrindo segredos que podem mudar tudo.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i7-8700K ou AMD Ryzen 5 3600X',
      memory: '16 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1070 ou AMD Radeon RX 5700',
      storage: '155 GB'
    }
  },
  {
    id: 3,
    title: 'The Legend of Zelda: Tears of the Kingdom',
    oldPrice: 'R$ 349,90',
    newPrice: 'R$ 249,90',
    image: zeldaImg,
    gallery: [zeldaImg, zeldaImg, zeldaImg, zeldaImg],
    tag: 'lancamento',
    tagLabel: 'Lançamento',
    description:
      'Link embarca em uma nova aventura épica pelo reino de Hyrule e pelos céus além dele. Com novas habilidades como Ultrahand e Fuse, crie ferramentas, resolva puzzles e descubra os mistérios por trás das Tears of the Kingdom.',
    requirements: {
      so: 'Nintendo Switch (versão física e digital)',
      cpu: 'ARM Cortex-A57 (4-core)',
      memory: '4 GB RAM',
      gpu: 'NVIDIA Custom Tegra',
      storage: '16.3 GB'
    }
  },
  {
    id: 4,
    title: 'Diablo III: Eternal Collection',
    oldPrice: 'R$ 149,90',
    newPrice: 'R$ 79,90',
    image: diabloImg,
    gallery: [diabloImg, diabloImg, diabloImg, diabloImg],
    tag: 'promocao',
    tagLabel: 'Promoção',
    description:
      'Diablo III: Eternal Collection inclui o jogo base e todas as expansões — Reaper of Souls e Rise of the Necromancer. Escolha entre sete classes de heróis e combata as forças das trevas em Sanctuary em modo solo ou cooperativo.',
    requirements: {
      so: 'Windows 7 / 8 / 10 64-bit',
      cpu: 'Intel Core i3 ou AMD Phenom II X4 925',
      memory: '4 GB RAM',
      gpu: 'NVIDIA GeForce GTX 460 ou AMD Radeon HD 6950',
      storage: '25 GB'
    }
  },
  {
    id: 5,
    title: 'Hogwarts Legacy',
    oldPrice: 'R$ 299,90',
    newPrice: 'R$ 179,90',
    image: hogwartsImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_725bf58485beb4aa37a3a69c1e2baa69bf3e4653.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_94058497bf0f8fabdde17ee8d59bece609a60663.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/ss_8e08976236d29b1897769257ac3c64e9264792a5.1920x1080.jpg'
    ],
    tag: 'lancamento',
    tagLabel: 'Lançamento',
    description:
      'Viva uma experiência imersiva no mundo mágico do século XIX. Em Hogwarts Legacy, você é um estudante que detém a chave de um antigo segredo que ameaça dividir o mundo bruxo. Explore Hogwarts, Hogsmeade e as florestas ao redor enquanto domina a magia.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i7-8700 ou AMD Ryzen 5 3600',
      memory: '16 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1080 Ti ou AMD Radeon RX 5700 XT',
      storage: '85 GB'
    }
  },
  {
    id: 7,
    title: "Marvel's Spider-Man: Miles Morales",
    oldPrice: 'R$ 250,00',
    newPrice: 'R$ 99,90',
    image: milesImg,
    gallery: [
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817190/ss_a240e0c6f37569493ed749d9317718d8ce9f5d18.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817190/ss_02bb2ac97c3ce854344a537d9ed89c70ba45c3d3.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817190/ss_616a0e2ab905281a483d99d0e1f07fc0749770d2.1920x1080.jpg',
      'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817190/ss_1950c472438a5ccde0f9e7c112dceaddd7cd52f1.1920x1080.jpg'
    ],
    tag: 'pre-venda',
    tagLabel: 'Pré-venda',
    description:
      'Miles Morales enfrenta seu maior desafio em uma aventura que define quem ele é dentro e fora da máscara. Com poderes únicos de camuflagem e bioeletricidade, o novo Spider-Man protege o Harlem enquanto descobre seu verdadeiro potencial.',
    requirements: {
      so: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-4670 ou AMD Ryzen 5 1600',
      memory: '16 GB RAM',
      gpu: 'NVIDIA GeForce GTX 1060 6GB ou AMD Radeon RX 5500 XT 8GB',
      storage: '75 GB'
    }
  }
]

const RpgAndAction = () => {
  const [selectedGame, setSelectedGame] = useState<GameDetails | null>(null)

  return (
    <Section>
      <Container>
        <SectionTitle>
          <h2>RPG e Ação</h2>
        </SectionTitle>
        <Games>
          {games.map((game) => (
            <Game key={game.id} onClick={() => setSelectedGame(game)}>
              <GameImageWrapper>
                <GameImage src={game.image} alt={game.title} />
                <Tag label={game.tagLabel} variant={game.tag} />
              </GameImageWrapper>
              <GameInfo>
                <h3>{game.title}</h3>
                <p>
                  <span>{game.oldPrice}</span>
                  <span>{game.newPrice}</span>
                </p>
              </GameInfo>
            </Game>
          ))}
        </Games>
      </Container>
      <Modal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </Section>
  )
}

export default RpgAndAction
