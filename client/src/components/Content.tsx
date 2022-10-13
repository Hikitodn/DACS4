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
      <div className="flex justify-center py-8 w-auto">
        <div className={contentClass}>
          <span>{contentText}</span>
        </div>
        <div className={imgClass}>
          <img src={imgLink} alt="untitled" />
        </div>
      </div>
    </>
  );
};

export default Content;
