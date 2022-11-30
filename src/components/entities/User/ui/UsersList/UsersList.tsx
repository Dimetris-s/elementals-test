import React, { FC, useEffect, useRef } from 'react';
import cn from 'classnames';
import { UserItem } from 'components/entities/User/ui/UserItem';
import styles from './UsersList.module.scss';
import { useUsers } from 'hooks/useUsers';
import { useObserver } from 'hooks/useObserver';
import { Preloader } from 'components/common/Preloader';

interface UsersListProps {
  className?: string;
}

export const UsersList: FC<UsersListProps> = ({ className }) => {
  const lastElement = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef<HTMLDivElement | null>(null)
  const { users, loadUsers, lastUser, isLoading, isLoaded } = useUsers();
  useObserver({ ref: lastElement, callback: loadUsers, canLoad: isLoaded, isLoading });
  useEffect(() => {
    if(!isLoaded) return;
    const positionWidth = positionRef.current.getBoundingClientRect().width;
    listRef.current.style.setProperty('--position-width', `${positionWidth}px`)
  }, [lastUser]);
  return (
    <div ref={listRef} className={cn(styles.root, className)}>
      {users.slice(0, -1).map((user, index) => <UserItem position={index + 1} user={user} key={user.id} />)}
      {isLoaded &&
      <UserItem positionRef={positionRef} ref={lastElement} position={users.length} user={lastUser} key={lastUser.id} />
      }
      {isLoading && <Preloader color="#5798E4" className={styles.loader} />}
    </div>
  );
};
