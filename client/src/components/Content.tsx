import React from "react";

interface Att {
  contentClass?: string;
  imgClass?: string;
  imgLink?: string;
  contentText?: string;
}

const Content: React.FC<Att> = ({
  contentClass,
  imgClass,
  imgLink,
  contentText,
}) => {
  return (
    <>
      <div className={contentClass}>
        <span>{contentText}</span>
      </div>
      <div className={imgClass}>
        <img src={imgLink} alt="untitled" />
      </div>
    </>
  );
};

export default Content;
