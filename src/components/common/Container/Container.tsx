import React, { FC } from 'react';
import cn from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={cn(styles.root, className)}>
      {children}
    </div>
  );
};
