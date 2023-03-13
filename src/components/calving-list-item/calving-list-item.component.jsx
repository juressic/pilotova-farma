import React from 'react';
import './calving-list-item.style.scss';

class CalvingListItem extends React.Component {
  /*constructor() {
    super();
  }*/

  render() {
    const daysOfPrefnency = (pregnencyDate) => {
      const date = new Date(pregnencyDate);
      date.setMonth(date.getMonth() + 9);
      // Calculate number of days
      const now = new Date();
      const timeDiff = date.getTime() - now.getTime();
      const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

      return daysDiff;
      // Display number of days
      //console.log(daysDiff);
    };

    const bornDay = (pregnencyDate) => {
      const date = new Date(pregnencyDate);

      date.setMonth(date.getMonth() + 9);
      return date.toLocaleDateString();
    };
    return (
      <div className="calving-list">
        <span>{this.props.animal.broj_zivotinje}</span>
        <span>{this.props.animal.datum_začeća}</span>
        <span>{daysOfPrefnency(this.props.animal.datum_začeća)}</span>
        <span>{bornDay(this.props.animal.datum_začeća)}</span>
      </div>
    );
  }
}

export default CalvingListItem;
