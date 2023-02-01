// import styled-components
import { ButtonHome } from '../components/styled_components/buttons/button';
import {
  Section,
  SectionDown,
} from '../components/styled_components/homepage/styled';
import { LogoInAside } from '../components/styled_components/logo/logo';

// import react-icons
import { AiFillLinkedin, AiFillGithub, AiFillApple } from 'react-icons/ai';

// import lottie animation
import { LottieDown } from '../animation/lottie/componentAnimate/LottieDown';

// import react
import { useContext, useEffect } from 'react';

// import context-api
import { Context } from '../context/Context';
import { ContextLogic } from '../context/Provider';

export const Intro = () => {
  const { navigate } = useContext(Context);
  const { noLoading } = useContext(ContextLogic);
  useEffect(() => noLoading(), []);

  return (
    <>
      <div className="intro">
        <LogoInAside />
        <Section>
          <h1>Olá, bem vindo(a) à meu teste</h1>
          <h1>Isto é apenas uma introdução</h1>
          <h1>Role até em baixo para saber mais</h1>
          <br />
          <h1>Clique no botão para iniciar</h1>
          <div>
            <ButtonHome onClick={() => navigate('/dashboard')}>
              Ver a aplicação
            </ButtonHome>
          </div>
          <a href="#mainHome">
            <LottieDown />
          </a>
        </Section>
        <SectionDown>
          <main id="mainHome">
            <div className="cardProfile">
              <ul>
                <li id="profile"></li>
                <li>
                  <h3>Geferson Almeida Lopes</h3>
                </li>
                <li>
                  <p>Desenvolvedor FullStack</p>
                  <p>gefersonjefreey@gmail.com</p>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/algeferson/"
                  >
                    <AiFillLinkedin />
                    Perfil do Linkedin
                  </a>
                  <a target="_blank" href="https://github.com/GefersonLopes">
                    <AiFillGithub />
                    Perfil do GitHub
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://invitation-plum.vercel.app/">
                    <AiFillApple />
                    Outro projeto legal
                  </a>
                </li>
              </ul>
            </div>
          </main>
        </SectionDown>
      </div>
    </>
  );
};
