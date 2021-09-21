import React from 'react';
import Image from 'next/image'
import HeaderDetail from '../../../../public/images/header-detail.svg'
import Logo from '../../../../public/images/logo.svg'
import Avatar from '../../../../public/images/avatar.png'

import styles from './styles.module.scss'

const LoggedHeader: React.FC = () => {
  return(
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
        <Image 
          src={Avatar} 
          alt="User image" 
          className={styles.avatar}
        />
        <div className={styles.dot}/>
      </div>
    </header>
  );
}

export {LoggedHeader};