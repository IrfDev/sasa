import RenderCounterComponent from "./components/RenderCounter";

function App() {
  // Get all female persons between 30 and 45

  return (
    <>
      <div className="h-full block relative w-full bg-black overflow-auto">
        <section className="bg-indigo-100 h-36 w-2/3 p-10 rounded-xl">
          <div className="text-indigo-900 h-10 w-full  rounded-full px-10 text-xl">
            Hola
          </div>
        </section>
      </div>

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
