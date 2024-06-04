import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="flex flex-col w-auto h-auto font-sans justify-center">
      <ContentContainer />
      <SideBar />
    </div>
  );
}

export default App;
