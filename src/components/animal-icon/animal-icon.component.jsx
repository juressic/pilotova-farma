import React from 'react';

class AnimalIcon extends React.Component {
  constructor(props) {
    super();
    this.state = {
      animal: props.animal,
    };
  }

  render() {
    const setAnimalIcon = () => {
      switch (this.state.animal.uzrast) {
        case 'Krava':
          return '/icons/icons8-cow-96.png';
        case 'Junica':
          return '/icons/icons8-heifer-96.png';
        case 'Junac':
          return '/icons/icons8-heifer-96.png';
        case 'Tele':
          return '/icons/icons8-calf-64.png';
        case 'Bik':
          return '/icons/icons8-bull-52.png';
        default:
          return 'icons/icons8-question-mark-60.png';
      }
    };

    return (
      <>
        <img src={setAnimalIcon()} style={{ width: '30px' }} alt="cow-icon" />
      </>
    );
  }
}

export default AnimalIcon;
