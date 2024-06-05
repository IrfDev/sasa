import RenderCounterComponent from "./RenderCounter";

const PeopleCardList = () => {
  // Use your state store to use the people in there
  return (
    <>
      <div>PeopleCardList</div>

      <section className="bg-indigo-300 text-indigo-900">
        People card component number of renders: <RenderCounterComponent />
      </section>
    </>
  );
};

export default PeopleCardList;
