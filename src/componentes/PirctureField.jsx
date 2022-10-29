import React from 'react'


export default function ClickableField({ imgData, imgFormat, caption }) {
	return (
        <img className="h-30" src={"data:" + imgFormat + ", " + imgData} alt={caption}></img>
	)
}
