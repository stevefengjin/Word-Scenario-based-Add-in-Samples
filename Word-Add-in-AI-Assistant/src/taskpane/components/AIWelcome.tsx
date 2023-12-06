import { RightOutlined } from "@ant-design/icons";
import React from "react";

export default class AIWelcome extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <>
            <div className="generate">
                <div className="description">
                    <p>This add-in demonstrate Word add-in capabilities to insert content generated by AI or edited manually into Document Comment Footnote and Header. 
                    </p>
                    <ul>
                        <li>select the options from the drop down list.</li>
                        <li>switch to chat mode.</li>
                    </ul>
                </div>
            </div>
            <div className="bottom">
                <div className="item_desc">For next steps:</div>
                <div className="bottom_item">
                    <RightOutlined className="item_icon" />
                    <div className="bottom_item_info">
                        <a href="https://github.com/OfficeDev/Word-Scenario-based-Add-in-Samples/tree/main/Word-Add-in-AI-Assistant" target="_blank">Start your project from this sample</a>
                    </div>
                </div>
                <div className="bottom_item">
                    <RightOutlined className="item_icon" />
                    <div className="bottom_item_info">
                        <a href="https://github.com/OfficeDev/Word-Scenario-based-Add-in-Samples" target="_blank">See more samples</a>
                    </div>
                </div>
                <div className="bottom_item">
                    <RightOutlined className="item_icon" />
                    <div className="bottom_item_info">
                        <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/quickstarts/word-quickstart?tabs=yeomangenerator" target="_blank">Office add-in documentation</a>
                    </div>
                </div>
            </div>
        </>
    }
}