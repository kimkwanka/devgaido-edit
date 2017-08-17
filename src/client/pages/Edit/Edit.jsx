import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ObjectCard from './ObjectCard';

import actions from '../../actions';

const { loadFile } = actions;

let json = null;
let reader = null;
const filesToLoad = [];

const readNextFile = (files) => {
  if (files.length > 0) {
    console.log(files[0]);
    reader.readAsText(files[0]);
  }
};

if (typeof window !== 'undefined') {
  reader = new FileReader();

  reader.onload = () => {
    json = JSON.parse(reader.result);
    loadFile(json);
    filesToLoad.splice(0, 1);
    readNextFile(filesToLoad);
  };
}

const handleFiles = (e) => {
  const files = e.target.files;
  for (let i = 0; i < files.length; i += 1) {
    filesToLoad.push(files[i]);
  }
  readNextFile(filesToLoad);
};

const Edit = ({ files }) => {
  const content = [];
  files.forEach((file) => {
    content.push(
      <div>
        { Object.keys(file).map(key => <ObjectCard obj={file[key]} key={key} />) }
      </div>,
    );
  });
  return (
    <div className="container margin-top-small">
      <Helmet title="Edit" />
      <h1 className="margin-top">Edit</h1>
      <div className="flex-column items-center margin-top-big">
        <input type="file" id="input" onChange={handleFiles} multiple="multiple" />
      </div>
      <div className="margin-vertical-big">
        {content}
      </div>
    </div>
  );
};

Edit.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(store => ({
  files: store.files,
}))(Edit);
