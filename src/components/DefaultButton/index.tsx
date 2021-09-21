import React from 'react';

import styles from './styles.module.scss'

interface DefaultButtonProps extends React.HTMLProps<HTMLButtonElement>{
  value: string;
  shadow?: boolean;
  linkTo?: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({value, shadow, linkTo, ...rest}) => {
  return (
    linkTo ? (
      <h1>alo</h1>
    ) : (
      <button {...rest} type="button" className={`${styles.defaultButton} ${!shadow ? styles.shadow : null}`}>
      {value} 
    </button>
    )
  );
}

export default DefaultButton;