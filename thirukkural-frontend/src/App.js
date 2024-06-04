import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="flex flex-col h-auto font-sans  bg-slate-300 justify-center">
      <ContentContainer />
      <SideBar />
    </div>
  );
}

export default App;
