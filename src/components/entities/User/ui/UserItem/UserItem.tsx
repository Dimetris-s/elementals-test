import React, { FC, forwardRef, RefObject, useState } from 'react';
import cn from 'classnames';
import HelmetSVG from 'assets/icons/helmet.svg';
import { User } from 'models/User';
import styles from './UserItem.module.scss';
import { formatMilliseconds } from 'shared/utils/formatMilliseconds';

interface UserItemProps {
  user: User;
  position: number;
  positionRef?: RefObject<HTMLDivElement>;
  className?: string;
}

export const UserItem = forwardRef<HTMLDivElement, UserItemProps>(({  user, position, positionRef, className }, ref) => {
  const { name, speed, time, color } = user;
  const [isActive, setActive] = useState(false);
  const toggleActive = () => {
    setActive(prev => !prev)
  }
  return (
    <div ref={ref && ref} onClick={toggleActive} className={cn(styles.root, {[styles.isActive]: isActive}, className)}>
      <div ref={positionRef} className={cn(styles.position, {[styles.isLast]: positionRef})}>
        {position}
      </div>
      {/*// @ts-ignore*/}
      <div style={{'--helmet-color': color}} className={styles.avatar}>
        <HelmetSVG />
      </div>
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <div className={styles.speedTime}>
          <span className={styles.time}>{formatMilliseconds(time)}</span>
          <span className={styles.divider}/>
          <span className={styles.speed}>{speed} км/ч</span>
        </div>
        <span className={styles.penalty}>
          штрафное время: 00:00.00
        </span>
      </div>
    </div>
  );
});
