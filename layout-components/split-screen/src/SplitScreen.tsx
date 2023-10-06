import styles from '@/styles/SplitScreen.module.css';

interface SplitScreenProps {
	children: React.ReactNode;
	leftWeight: number;
	rightWeight: number;
}

export const SplitScreen = ({
	children,
	leftWeight,
	rightWeight,
}: SplitScreenProps) => {
	const [left, right] = children as React.ReactElement[];

	return (
		<div className={styles.split_screen_container}>
			<div
				className={styles.split_screen_pane}
				style={{ '--pane-weight': leftWeight } as React.CSSProperties}
			>
				{left}
			</div>
			<div
				className={styles.split_screen_pane}
				style={{ '--pane-weight': rightWeight } as React.CSSProperties}
			>
				{right}
			</div>
		</div>
	);
};

/*
  App 컴포넌트에서 props로 받은 flex 가중치 값을 HTMLDivElement에게 전달하기 위해
  인라인 스타일에서 css 변수 값으로 전달함. 리액트 컴포넌트가 아니라서 바로 props로 전달할 수 없음.
*/
