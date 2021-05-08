import styles from './styles.module.scss';

export default function About() {
  return (
    <section className={ styles.aboutContainer }>
      <h1>Um pouco sobre mim</h1>

      <div id="about">
        <p>
          Sou de Brasília, Distrito Federal. Tenho 26 anos e sou apaixonado por tecnologia, principalmente segurança da informação (Web). Atualmente, faço um curso de Desenvolvimento de Software Full Stack na Trybe, mas já possuo certificado de Desenvolvedor Front End.
          Aqui, você pode verificar minhas principais competências e alguns de meus trabalhos realizados ao longo do curso. Para mais informações, dúvidas ou contratação de serviços, deixo meu contato logo abaixo. Obrigado!
        </p>
      </div>
    </section>
  );
}
