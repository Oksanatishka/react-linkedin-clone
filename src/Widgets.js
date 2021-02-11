import React from 'react';
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
		<div className="widgets__article">
			<div className="widgets__articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="widgets__articleRight">
				<h4>{heading}</h4>
				<p>{subtitle}</p>
			</div>
		</div>
    );
    
    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>

            {newsArticle("Oksana is back", "The best dev is here")}
			{newsArticle(
				"Covid sucks",
				"The absolute worst time of this year so far"
			)}
			{newsArticle(
				"Bitcoin",
				"Bitcoin is amongst the best things to invest in 2021 acording to financial experts "
			)}
			{newsArticle(
				"FullStack Developer",
				"The road to becoming a full-stack dev is hard and full of obstacles"
			)}
        </div>
    );
};

export default Widgets;