import React, { useState } from 'react';
import '../styles/experience.css';
import plusIcon from '../assets/plus_icon.png';

function ExperienceItem(props) {
  const [hover, setHover] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const item = props.item
  const isLast = props.isLast

  return (
    <div className={`exp-item ${isLast ? "last" : ""}`}>
      <div className="timeline">
        <button
          className="circle"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setExpanded(!expanded)}
        >
          {hover && item.description && (
            <img
              src={plusIcon}
              className={`plus ${expanded ? "rotate" : ""}`}
            />
          )}
        </button>
        <div className="line" />
      </div>

      <div className="content">
        <p className="title">{item.title}</p>
        <p className="subtitle">{item.subtitle}</p>

        {expanded && (
          <ul className="details">
            {item.description.map((point, i) => {
              return (
                <li>{point}</li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExperienceItem;