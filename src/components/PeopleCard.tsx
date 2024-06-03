import React from "react";

interface PeopleCard extends React.PropsWithChildren {}

const PeopleCard: React.FC<PeopleCard> = ({ children }) => {
  return <div>PeopleCard</div>;
};

export default PeopleCard;
