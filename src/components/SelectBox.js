
import React from 'react';
import "../Style/Animation.css"
export const SelectBox = ({ id, select }) => {
  return (
    <div className="select">
      <select id={id} onChange={select}>
        <option className="op" value="">Select Language</option>
        <option className="op" value="en">English</option>
        <option className="op" value="hi">Hindi</option>
        <option className="op" value="es">Spanish</option>
        <option className="op" value="de">German</option>
        <option className="op" value="fr">French</option>
        <option className="op" value="tr">Turkish</option>
      </select>
    </div>
  );
};
