import styles from './testing.module.scss';

/* eslint-disable-next-line */
export interface TestingProps {}

export function Testing(props: TestingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testing!</h1>
    </div>
  );
}

export default Testing;
