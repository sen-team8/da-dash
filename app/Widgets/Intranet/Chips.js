import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import Icon from '../../helper/Icons';

const handleClick = (key, pathString, goToStringPath) => {
  return goToStringPath(pathString.slice(0, key+1));
};
const searchStyle = () => {
  return {
    margin: window.innerWidth < 600 ? '0 20px 0px 0' : '0 20px 10px 0',
    padding: window.innerWidth < 600 ? '4px 10px' : 0,
    borderTop: window.innerWidth < 600 ? 'solid 1px #e0e0e0': 0,
  };
};

const styleFoo = () => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: window.innerWidth < 600 ? 'column': 'row',
      justifyContent: 'space-between',
    },
  };
};

const chipsDisplay = (string, length, k) => {
  if (window.innerWidth < 600) {
    if (length > 3) {
      if (k > 2) {
        return '..';
      }
      return `${string.slice(0, 4)}..`;
    }
    if (length > 2) {
      return `${string.slice(0, 5)}..`;
    }
  }
  return string;
};
export default class Chips extends React.Component {

  static propTypes = {
    goToStringPath: React.PropTypes.func.isRequired,
    pathString: React.PropTypes.array,
    setSearch: React.PropTypes.func,
  }

  handleSearchChange = () => {
    const value = this.refs.search.value;
    if (value.length >= 4) {
      clearTimeout(this.lastQuery);
      this.lastQuery = setTimeout(() => this.props.setSearch(value));
      this.setState({
        search: true,
      });
    }
  }

  render() {
    const { pathString, goToStringPath } = this.props;
    const search = (
      <div className="intranet-search" style={searchStyle()}>
        <input type="text" className="query form-control"
          ref="search" placeholder="Search" onChange={this.handleSearchChange}
        />
          <span className="input-group-btn">
          <button className="btn" type="button">
            <span className=" glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    );
    const style = styleFoo();
    const home = (
      <BreadcrumbItem onClick={function foo() {goToStringPath([]);}}>
        <Icon icon="home" style={{ fill: '#000' }}/>
      </BreadcrumbItem>
    );

    const List = pathString.map((e, k) => {
      return (
        <BreadcrumbItem
          key={k}
          onClick={function foo() {handleClick(k, pathString, goToStringPath);}}
        >
          {chipsDisplay(e, pathString.length, k)}
        </BreadcrumbItem>
      );
    });
    return (
      <div style={style.wrapper} className="intranet-breadcrumb">
        <Breadcrumb>
          {[home].concat(List)}
        </Breadcrumb>
        {search}
      </div>
    );
  }
}
