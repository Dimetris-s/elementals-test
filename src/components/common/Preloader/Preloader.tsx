import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Preloader.module.scss';

interface PreloaderProps {
  color?: string;
  className?: string;
}

export const Preloader: FC<PreloaderProps> = ({ color, className }) => {
  return (
    <div
      style={{
        // @ts-ignore
        '--preloader-color': color || '#fff',
      }} className={cn(styles.root, className)}
    >
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
