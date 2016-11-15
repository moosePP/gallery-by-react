require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


let imageDatas = require('../data/imageDatas.json');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="stage">
      	<div className="img-sec">
      	</div>
       	<div className="controller-nav">
      	</div>     	
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
