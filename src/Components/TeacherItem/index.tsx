import React from 'react';

// images and icons
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

// styles
import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/4992281?s=460&u=9a6829acd97838858ab2db64df1346897e70bb82&v=4"
          alt="teacher"
        />
        <div>
          <strong>Nome professor</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        recusandae, fuga unde odio deserunt blanditiis illum voluptate sit
        sequi. Provident ducimus illo dignissimos architecto necessitatibus
        accusantium saepe ex officiis utss shs
      </p>
      <footer>
        <p>
          Preço por hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={WhatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
