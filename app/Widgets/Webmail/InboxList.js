import React from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

const style = {
  main: {
    paddingLeft: '15px',
    height: 'auto',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'space-between',
    padding: '5px',
  },
  circle: [
    { background: '#FFB58A' },
    { background: '#FFF08A' },
    { background: '#D3FF8A' },
    { background: '#99FF8A' },
    { background: '#8AFFB5' },
    { background: '#8AFFF0' },
  ],
  date: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Spet', 'Oct', 'Nov', 'Dec'],
};

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
function makeDate(unixTimestamp) {
  const date = new Date(unixTimestamp);
  const d = new Date();
  let formattedDate = null;
  if (d-unixTimestamp > 86400000) {
    const day = date.getDate();
    const month = date.getMonth();

    formattedDate = `${style.date[month]} ${day}`;
  } else {
    let meridian = 'AM';
    let hours = date.getHours();
    if (hours>12) {
      hours-=12;
      meridian='PM';
    }
    const minutes = `0${date.getMinutes()}`;

    formattedDate = `${hours}:${minutes.substr(-2)} ${meridian}`;
  }
  return (formattedDate);
}

export default class ListItem extends React.Component {

  static propTypes = {
    inbox: React.PropTypes.object.isRequired,
    showEmail: React.PropTypes.func.isRequired,
    quickSearch: React.PropTypes.object,
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.inbox !== this.props.inbox || nextProps.quickSearch !== this.props.quickSearch;
  }

  displaySearch = () => {
    const obj = this.props.quickSearch;
    if (!obj) return null;
    return (
        this.displayMails(this.props.quickSearch)
    );
  }

  displayMails = (obj) => {
    const { showEmail } = this.props;
    let list = [];
    list = list.concat(obj.map((item, key) => {
      const from = item.get('e') && item.get('e').get(item.get('e').count() -1);
      const date = item.get('d');
      const header = from.get('p') || from.get('d') || from.get('a');
      return (
        <ListGroupItem
          key={key}
          style={style.main}
          onClick={function foo() {showEmail(item.get('id'));}}
        >
          <div style={style.content} className="intranet-item">
            <div style={style.circle[header.charCodeAt(0)%6]} className="webmail-icon-circular" circle>
              <p style={{ color: 'white', margin: '0px auto' }}>{header.charAt(0).toUpperCase()}</p>
            </div>
            &nbsp;
            <div
              style={{ display: 'flex',
                flexDirection: 'column',
                alignItems: 'space-between',
                lineHeight: '80%', marginTop: '-8px' }}
            >
              <div>
                <p style={{ fontSize: '1.1em', fontWeight: 'bold' }}>{header}</p>
                <span style={{ position: 'absolute', right: '5px', padding: '5px', marginTop: '-20px' }}>
                  {makeDate(date)}
                </span>
              </div>
                <p style={{ fontSize: '0.9em', fontWeight: 'bold' }}>
                  { window.innerWidth < 600 && item.get('su').length > 50
                  ? `${item.get('su').slice(0, 22)}...${item.get('su').slice(-15)}` : item.get('su') }
                </p>
                <div style={{ lineHeight: '100%' }}>{item.get('fr')}</div>
            </div>
          </div>
        </ListGroupItem>
      );
    }));

    return (list);
  }

  render() {
    const mailList = this.displayMails(this.props.inbox);
    const searchList = this.displaySearch();
    console.log(searchList);
    // console.debug('render', new Date().getTime())
    const inboxList = (this.props.quickSearch) ? searchList : mailList;
    return (
      <ListGroup ref="list" className="intranet-list">
        {inboxList}
      </ListGroup>
    );
  }
}
