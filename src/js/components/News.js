import React from 'react';
import axios from 'axios';
import moment from 'moment';
import css from '../../css/components/News.css';
import { staticPath } from '../../../config';

import IconChevronRight from '../icons/IconChevronRight';
import Loading from '../containers/Loading';

class News extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
  }

  componentDidMount() {
    axios.get(`${staticPath}json/news.json`)
      .then((response) => {
        this.setState({ entries: response.data.entries });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderEntry(entry) {
    return (
      <div className={css.item}>
        <span className={css.itemIcon}><IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" /></span>
        <div className={css.itemDate}>{moment(entry.date).format('D/MM/YYYY')}</div>
        <span className={css.itemText}>{entry.text}</span>
      </div>
    )
  }

  renderEntries() {
    if (this.state.entries.length > 0) {
      return this.state.entries.map((entry) => {
        return this.renderEntry(entry);
      })
    } else {
      return (
        <div className={css.loadingContainer}>
          <Loading />
        </div>
      )
    }
  }

  render() {
    return (
      <div className={css.container}>
        <div className={css.heading}>Latest updates</div>
        {this.renderEntries()}
      </div>
    );
  }
}

export default News;
