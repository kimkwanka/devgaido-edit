import React from 'react';
import PropTypes from 'prop-types';

const StringEdit = ({ obj, objKey }) => (
  <div className="flex items-center">
    <label className="no-margin width-33 normal" htmlFor="nameField">{objKey}</label>
    <input className="border-white border-focus-primary bg-focus-grey-blue bold" type="text" defaultValue={obj[objKey]} />
  </div>
);

const ObjectCard = ({ obj }) => {
  const contents = Object.keys(obj).sort().map((key) => {
    if (typeof obj[key] !== 'object') {
      return <StringEdit obj={obj} objKey={key} key={key} />;
    }
    if (obj[key].constructor === Array) {
      const arr = obj[key];
      return <div key={key}><p>{key}:</p>{arr.map(el => (<p key={el}>{el}</p>))}</div>;
    }
    return null;
  });

  contents.unshift(<h3>{obj.name}</h3>);

  return (
    <div className="bg-white border-round margin-top-small padding-small">
      {contents}
    </div>
  );
};

ObjectCard.propTypes = {
  obj: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default ObjectCard;
