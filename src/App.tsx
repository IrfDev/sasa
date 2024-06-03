import RenderCounterComponent from "./components/RenderCounter";

function App() {
  // Get all female persons between 30 and 45

  return (
    <>
      <div className="h-full block relative w-full bg-black overflow-auto"></div>

      <footer className="sticky bottom-0 w-screen bg-green-800 p-5">
        <span className="text-white">This page is loading</span>
        <span className="text-white">
          <RenderCounterComponent />
        </span>
      </footer>
    </>
  );
}

export default App;
