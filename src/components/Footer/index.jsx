import React from 'react';

import {
  FaReact, FaGithub, FaLinkedin, FaInstagram,
} from 'react-icons/fa';
import { AiOutlineCopyright } from 'react-icons/ai';
import style from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <span>
        <AiOutlineCopyright className={style.reactIcon} />
        Copyright 2021 | Lucas Neves - Todos os direitos reservados
      </span>
      <span className={style.teste}>
        <div>
          <a href="https://github.com/Qu4k3r" target="_blank" rel="noreferrer">
            <FaGithub className={style.contact} />
          </a>
          <a href="https://linkedin.com/in/l-neves" target="_blank" rel="noreferrer">
            <FaLinkedin className={style.contact} />
          </a>
          <a href="https://instagram.com/_nevs_k" target="_blank" rel="noreferrer">
            <FaInstagram className={style.contact} />
          </a>
        </div>
      </span>
      <span>
        Feito com
        <FaReact className={style.reactIcon} />
      </span>
    </footer>
  );
}
