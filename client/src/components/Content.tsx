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
      <div className="flex justify-center">
        <div className={contentClass}>{contentText}</div>
        <div className={imgClass}>
          <img src={imgLink} alt={imgLink} />
        </div>
      </div>
    </>
  );
};

export default Content;
