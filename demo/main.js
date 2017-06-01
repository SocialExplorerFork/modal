import ReactDOM from 'react-dom';
import React    from 'react';

import { Modal } from '../index';


document.body.addEventListener('o.InitModal', e => {
  ReactDOM.render(
    React.createElement(Modal, e.detail.props, e.detail.props.children)
    , document.getElementById(e.detail.elementId)
  );
});
