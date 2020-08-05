import React from 'react';

// components
import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';

// images and icons
import WarningIcon from '../../assets/images/icons/warning.svg';

// styles
import './styles.css';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>
          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>
          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custo da sua hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={WarningIcon} alt="Aviso" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
