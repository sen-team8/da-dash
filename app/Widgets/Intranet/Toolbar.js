import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import Icon from '../../helper/Icons';

let style;

const handleClick = (key, pathString, goToStringPath) => {
  return goToStringPath(pathString.slice(0, key+1));
};

export default ({ pathString, goToStringPath }) => {
  const home = (
    <BreadcrumbItem onClick={function foo() {goToStringPath([]);}}>
      <Icon icon="home" style={{ fill: '#000' }}/>
    </BreadcrumbItem>
  );
  const List = pathString.map((e, k) => {
    return (
      <BreadcrumbItem
        onClick={function foo() {handleClick(k, pathString, goToStringPath);}}
      >
        {e}
      </BreadcrumbItem>
    );
  });
  return (
    <div style={style.wrapper}>
      <Breadcrumb>
        {[home].concat(List)}
      </Breadcrumb>
    </div>
  );
};

style = {
  wrapper: {
    height: '50px',
  },
};
