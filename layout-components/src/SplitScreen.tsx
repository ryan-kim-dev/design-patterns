import styles from '@/styles/SplitScreen.module.css';

interface SplitScreenProps {
  left: React.ElementType;
  right: React.ElementType;
}

export const SplitScreen = ({ left: Left, right: Right }: SplitScreenProps) => {
  return (
    <div className={styles.split_screen_container}>
      <div className={styles.split_screen_pane}>
        <Left />
      </div>
      <div className={styles.split_screen_pane}>
        <Right />
      </div>
    </div>
  );
};
