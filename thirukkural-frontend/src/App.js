import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="flex flex-col h-screen font-sans  bg-slate-300">
      <ContentContainer />
      <SideBar />
    </div>
  );
}

export default App;
