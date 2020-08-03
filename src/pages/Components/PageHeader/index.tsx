import React from 'react';
import { Link } from 'react-router-dom';

// images and icons
import BackIcon from '../../../assets/images/icons/back.svg';
import LogoImage from '../../../assets/images/logo.svg';

// styles
import './styles.css';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={BackIcon} alt="Voltar" />
        </Link>
        <img src={LogoImage} alt="Proffy" />
      </div>
      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
};

export default PageHeader;
