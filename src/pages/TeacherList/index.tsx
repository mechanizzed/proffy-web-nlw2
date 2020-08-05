import React, { FormEvent } from 'react';

// components
import PageHeader from '../../Components/PageHeader';
import TeacherItem, { TeacherProps } from '../../Components/TeacherItem';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

// api
import api from '../../services/api';

// images and icons
import SearchIconImage from '../../assets/images/icons/search.svg';

// styles
import './styles.css';

function TeacherList() {
  const [teacherList, setTeacherList] = React.useState([]);

  const [subject, setSubject] = React.useState('');
  const [week_day, setWeekDay] = React.useState('');
  const [time, setTime] = React.useState('');

  async function handleSearchTeachers(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.get('classes/filter', {
        params: {
          week_day,
          subject,
          time,
        },
      });
      setTeacherList(response.data);
    } catch (error) {}
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Portugês', label: 'Portugês' },
              { value: 'Química', label: 'Química' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Horário"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">
            <img src={SearchIconImage} alt="Buscar" />
          </button>
        </form>
      </PageHeader>

      <main>
        {teacherList.map((teacher: TeacherProps) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
