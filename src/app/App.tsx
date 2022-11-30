import React from 'react';
import { Container } from 'components/common/Container';
import { UsersList } from 'components/entities/User';
import styles from './App.module.scss';

export const App = () => (
  <Container className={styles.container}>
    <UsersList />
  </Container>
);
