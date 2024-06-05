import PeopleCardList from "./components/PeopleCardList";
import RenderCounterComponent from "./components/RenderCounter";
import { getGender } from "./helpers/getDataByName";
import names from "./data/names";
import { useEffect } from "react";
import { useStore } from "./hooks/useStore";
import { store } from "./lib/Store";

function App() {
  // Get all female persons between 30 and 45

  const [isLoading] = useStore<number>("isLoading");

  const getAll = async () => {
    const state = store.getState();
    state.isLoading = true;
    const persons = await Promise.all(
      names.map(async (name) => {
        await new Promise<boolean>((resolve) => {
          setTimeout(async () => {
            resolve(true);
          }, 2500);
        });
        const { data } = await getGender(name);

        return {
          name,
          age: data.gender,
        };
      })
    );

    state.isLoading = false;

    if (!Array.isArray(state.persons)) {
      store.getState().persons = [];
    }
    persons.forEach((pers) => store.getState().persons?.push(pers));
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div className="h-full block relative w-full bg-black overflow-auto">
        <PeopleCardList />
      </div>

      <footer className="sticky bottom-0 w-screen bg-green-800 p-5 flex justify-between">
        <span className="text-white">
          This page {isLoading ? "is loading" : "is not loading"}
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
