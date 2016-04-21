import React from 'react';
// import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
// import Icon from '../../helper/Icons';

// const handleClick = (key, pathString, goToPath) => {
//   return goToPath(pathString.slice(0, key+1));
// };
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

import Icon from '../../helper/Icons';

const searchStyle = () => {
  return {

  };
};

// const chipsDisplay = (string, length, k) => {
//   if (window.innerWidth < 600) {
//     if (length > 3) {
//       if (k > 2) {
//         return '..';
//       }
//       return `${string.slice(0, 4)}..`;
//     }
//     if (length > 2) {
//       return `${string.slice(0, 5)}..`;
//     }
//   }
//   return string;
// };
export default class Chips extends React.Component {

  static propTypes = {
    setSearch: React.PropTypes.func,
    showFixed: React.PropTypes.bool.isRequired,
    quickSearch: React.PropTypes.object,
    nullTheEmail: React.PropTypes.func,
  }

  handleSearchChange = () => {
    const value = this.refs.search.value;
    if (value && value.length >= 1 && value !== '' && value !== ' ') {
      console.log(value);
      clearTimeout(this.lastQuery);
      this.lastQuery = setTimeout(() => this.props.setSearch(value), 800);
    } else {
      this.clearSearch();
    }
  }

  clearSearch = () => {
    this.props.setSearch('');
    this.refs.search.value='';
  }

  styleFoo = () => {
    return {
      wrapper: {
        position: this.props.showFixed ? 'fixed' : undefined,
        top: this.props.showFixed ? '50px' : undefined,
        left: this.props.showFixed ? '0px' : undefined,
        paddingBottom: this.props.showFixed? '4px' : undefined,
        borderBottom: this.props.showFixed? 'solid 1px #e0e0e0' : undefined,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        zIndex: '1000',
        backgroundColor: 'rgb(245, 245, 245)',
        // marginTop: this.props.showFixed ? undefined: 30,
      },
      search: {
        margin: window.innerWidth < 600 ? '0 20px 0px 0' : '0 20px 10px 0',
        // padding: window.innerWidth < 600 ? '4px 10px' : 0,
        // borderTop: window.innerWidth < 600 ? 'solid 1px #e0e0e0': 0,
        // width: window.innerWidth < 600 ? '40%': undefined,
      }
    };
  };

  render() {
    const style = this.styleFoo();

    const searchButton = !(this.props.quickSearch) ?
    (<button className="btn" type="button">
      <span className=" glyphicon glyphicon-search"></span>
      </button>) :
      (<button className="btn" type="button" onClick={this.clearSearch}>
      <span className=" glyphicon glyphicon-remove"></span>
      </button>
    );
    const search = (
      <div className="intranet-search" style={style.search}>
        <input type="text" className="query form-control"
          ref="search" placeholder="Search" onChange={this.handleSearchChange}
        />
          <span className="input-group-btn">
          {searchButton}
        </span>
      </div>
    );
    return (
      <div style={style.wrapper} className="intranet-breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem onClick={this.props.nullTheEmail}>
            <Icon icon="home" style={{ fill: '#000' }} />
          </BreadcrumbItem>
        </Breadcrumb>
        {search}
      </div>
    );
  }
}
