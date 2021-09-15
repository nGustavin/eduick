import React from 'react';
import DefaultButton from '../../DefaultButton';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import styles from './styles.module.scss'

type HeaderProps = {
  onOpenLoginModal: () => void
}

const DefaultHeader: React.FC<HeaderProps> = ({onOpenLoginModal}) => {
  return(
    <header className={styles.headerContainer}>
      <HiOutlineMenuAlt1 size={24} color="var(--white)" className={styles.menuicon}/>
      <img src="/images/logo.svg" alt="eduick" />
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