import React from "react";

interface Att{
    content?: string,
    img_link?: string
};

const Content:React.FC<Att> = ({content, img_link}) => {
    return(
        <>
            <div className="flex justify-center">
                <div className={content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque incidunt velit odio inventore quisquam cumque ab vel, modi ex assumenda ipsam quam aspernatur magni ut fuga necessitatibus mollitia? Ipsam?</div>
                <div className={img_link}>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}

export default Content;