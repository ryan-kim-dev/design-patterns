import { SplitScreen } from '@/SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left Hand Component</h1>;
};

const RightHandComponent = () => {
  return <p style={{ backgroundColor: 'lightgray' }}>Right Hand Component</p>;
};

function App() {
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />;
}

export default App;
