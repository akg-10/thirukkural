import ContentContainer from './components/ContentContainer';
import SideBar from './components/SideBar';


function App() {
  return (
    <div className="flex flex-col bg-slate-300 h-screen">
      <ContentContainer />
      <SideBar />
    </div>
  );
}

export default App;
