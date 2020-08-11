import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';
// ****** components ******//
import MenuItem from '../menuItem/MenuItem';

const Directory = ({ sections }) => (
  
    <div className="directory-menu">
      {sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
);
   
const mapStateToProp = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProp)(Directory);
