import React from 'react';
import { CiHome } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { IoPawOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { GrCurrency } from "react-icons/gr";
import { FaCalendarDays } from "react-icons/fa6";


function unixToDate(unixTimestamp) {

    const date = new Date(unixTimestamp * 1000);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return `${day}.${month}.${year}`;
}

const InfoScroller = ({ currVideo }) => {
    const details = [];

    if (currVideo?.neighbourhoodName) {
        details.push(<span key="neighbourhood"><IoLocationOutline size={18} />{currVideo.neighbourhoodName}</span>);
    }

    if (currVideo?.price) {
        details.push(<span key="price"><GrCurrency size={18} />${currVideo.price}</span>);
    }

    if (currVideo?.startsAtUnix) {
        details.push(
            <span key="date">
                <FaCalendarDays size={18} />
                {unixToDate(currVideo.startsAtUnix)}
                {currVideo?.endsAtUnix && <> - {unixToDate(currVideo.endsAtUnix)}</>}
            </span>
        );
    }

    if (currVideo?.layout) {
        details.push(<span key="layout"><CiHome size={18} />{currVideo.layout}</span>);
    }

    if (currVideo?.roomTypes?.length > 0) {
        details.push(
            <span key="roomTypes">
                {currVideo.roomTypes.map((type, index) => (
                    <span key={index}>
                        <IoBedOutline size={18} />
                        {type}
                        {index < currVideo.roomTypes.length - 1 && ', '}
                    </span>
                ))}
            </span>
        );
    }

    if (currVideo?.noFlexing) {
        details.push(<span key="noFlexing"><MdOutlineDoNotDisturbOn size={18} />No flexing</span>);
    }

    if (currVideo?.petInfo) {
        details.push(<span key="petInfo"><IoPawOutline size={18} />{currVideo.petInfo}</span>);
    }

    if (currVideo?.gender) {
        details.push(<span key="gender">{currVideo.gender}</span>);
    }

    if (currVideo?.amenities?.length > 0) {
        details.push(
            <span key="amenities">
                {currVideo.amenities.map((amenity, index) => (
                    <span key={index}>
                        {amenity}
                        {index < currVideo.amenities.length - 1 && ', '}
                    </span>
                ))}
            </span>
        );
    }

    return (
        <div className="info-scroller">
            {details.map((detail, index) => (
                <React.Fragment key={index}>
                    {detail}
                    {index < details.length - 1 && <span className='saparator'>|</span>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default InfoScroller;
