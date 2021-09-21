import React, { useState } from 'react';
import DefaultButton from '../../DefaultButton';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import Image from 'next/image'
import Logo from '../../../../public/images/logo.svg'

type HeaderProps = {
  onOpenLoginModal: () => void;
}

const DefaultHeader: React.FC<HeaderProps> = ({onOpenLoginModal}) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  return(
    <header className={styles.headerContainer}>
      <button className={styles.menuButton} onClick={() => {setIsMenuOpened(true)}}> 
        <HiOutlineMenuAlt1 
          size={26} 
          color="var(--white)" 
          className={styles.menuicon}
        />
      </button>

      {/* Responsive mode fullscreen menu */}
      {isMenuOpened && (
        <div className={styles.fullscreenMenu}>
          <header>
          <Image src={Logo} alt="eduick" />
          <button onClick={() => setIsMenuOpened(false)}>
            <FiX color="var(--white)" size={25}/>
          </button>
          </header>
          <nav>
            <a href="">How it works</a>
            <a href="">About Us</a>
          </nav>
          <div>
          <DefaultButton
            shadow
            value="Get Started"
            onClick={onOpenLoginModal}
          />
          </div>
        </div>
      )}
      <Image src={Logo} alt="eduick" />
      <nav>
        <a href="">How it works</a>
        <a href="">About Us</a>
      </nav>
      <DefaultButton
        shadow
        value="Get Started"
        onClick={onOpenLoginModal}
      />
    </header>
  );
}

export {DefaultHeader};