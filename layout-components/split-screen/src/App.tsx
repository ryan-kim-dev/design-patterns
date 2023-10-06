import { SplitScreen } from '@/SplitScreen';

const LeftHandComponent = ({ name }: { name: string }) => {
	return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RightHandComponent = ({ message }: { message: string }) => {
	return <p style={{ backgroundColor: 'lightgray' }}>{message}</p>;
};

function App() {
	return (
		<SplitScreen leftWeight={1} rightWeight={5}>
			<LeftHandComponent name="ryan" />
			<RightHandComponent message="hi" />
		</SplitScreen>
	);
}

export default App;
