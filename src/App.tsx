import Converter from "./components/Converter";
import Graph from "./components/Graph";

function App() {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="bg-white md:w-[50rem] md:h-[43.25rem] w-[20rem] drop-shadow-[0px_4px_32px_rgba(15,23,42,0.15)] rounded-2xl md:py-16 md:px-20 py-4 px-4">
        <Converter />
        <div className="md:mt-16 mt-8 flex flex-col">
          <Graph />
        </div>
      </div>
    </div>
  );
}

export default App;
