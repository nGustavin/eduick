import Image from 'next/image';
import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { RiArrowDownSLine } from 'react-icons/ri';
import Avatar from '../../../../public/images/avatar.png';
import HeaderDetail from '../../../../public/images/header-detail.svg';
import Logo from '../../../../public/images/logo.svg';
import styles from './styles.module.scss';


const LoggedHeader: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return(
    <>
      <menu className={menuIsOpen ? styles.menuIsOpen : styles.closedMenu}>
        <div className={styles.menu}>
        <h3>CHANGE TO TEACHER MODE</h3>
        <BsArrowRight size={28} color="var(--gray-200)"/>
        </div>
      </menu>
    <header className={styles.headerContainer}>
      <div className={styles.detailContainer}>
        <Image 
          src={HeaderDetail} 
          alt="Header detail" 
          className={styles.detailImage}
        />
      </div>
      <nav>
        <Image src={Logo} alt="Eduick"/>
        <a>My Classes</a>
      </nav>
 
      <div>
        <button>CHANGE TO TEACHER MODE</button>
        <RiArrowDownSLine size={24} 
          onClick={() => setMenuIsOpen(!menuIsOpen)}
          className={menuIsOpen ? styles.openMenuArrowButton : styles.closedMenuArrowButton}
        />
        <Image 
          src={Avatar} 
          alt="User image" 
          className={styles.avatar}
        />
        <div className={styles.dot}/>
      </div>
    </header>
    </>
  );
}

export { LoggedHeader };
