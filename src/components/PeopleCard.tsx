import React from "react";

interface PeopleCard extends React.PropsWithChildren {
  name: string;
  age?: number;
  gender: string;
  country_id?: string;
}

const PeopleCard: React.FC<PeopleCard> = ({ children }) => {
  return <div>PeopleCard</div>;
};

export default PeopleCard;
