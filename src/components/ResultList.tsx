import React from "react";
import "./styles.css";

interface Props {
  title: string;
  img: string;
}
const ResultList = ({ title, img }: Props) => {
  return (
    <div className="resultList">
        <img src={img} alt={title} className="resultList__gifImage" />
        <h5 className="resultList__gifName">{title}</h5>
    </div>
  );
};

export default ResultList;
