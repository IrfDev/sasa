import RenderCounterComponent from "./RenderCounter";

type Props = {};

const PeopleCardList = (props: Props) => {
  // Use your state store to use the people in there
  return (
    <>
      <div>PeopleCardList</div>
      <RenderCounterComponent />
    </>
  );
};

export default PeopleCardList;
