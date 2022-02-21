import React from 'react';
import { ReactComponent as BackSvg } from '../../assets/back.svg';
import styles from './Back.module.css';

type BackProps = {
  backFunction: React.MouseEventHandler<HTMLDivElement>;
}

const Back = ({ backFunction }: BackProps) => {
  return (
    <div className={styles.back} onClick={backFunction}>
      <BackSvg className={styles.backSvg} />
      <span className={styles.backText}>Back</span>
    </div>
  )
}

export default Back;
