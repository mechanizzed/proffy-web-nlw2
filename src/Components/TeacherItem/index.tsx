import React from 'react';

// api
import api from '../../services/api';

// images and icons
import WhatsAppIcon from '../../assets/images/icons/whatsapp.svg';

// styles
import './styles.css';

export interface TeacherProps {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: TeacherProps;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  async function handleCreateNewConnection() {
    try {
      await api.post('connections', {
        user_id: teacher.user_id,
      });
    } catch (error) {
      alert('Erro ao realizar conexão');
    }
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço por hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          onClick={handleCreateNewConnection}
          href={`https://wa.me/55${teacher.whatsapp}`}
          target="_blank"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
