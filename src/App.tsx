import IndexHeader from "./components/IndexHeader";
import PeopleCardList from "./components/PeopleCardList";
import RenderCounterComponent from "./components/RenderCounter";

function App() {
  // Get all female persons between 30 and 45

  return (
    <>
      <IndexHeader />
      <div className="h-full block relative w-full bg-black overflow-auto">
        <PeopleCardList />
      </div>

      <footer className="sticky bottom-0 w-screen bg-green-800 p-5 flex justify-between">
        <span className="text-white">
          {/* This page {isLoading ? "is loading" : "is not loading"} */}
        </span>
        <span className="text-white">
          App.tsx component renders:
          <RenderCounterComponent />
        </span>
      </footer>
    </>
  );
}

export default App;
