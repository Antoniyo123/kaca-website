import React from 'react';
import NewTalent from '../component/NewTalent'
// import TalentCarousel from './TalentCarousel';

const talents = [
  { name: "Talent 1", image: require('../img/talent/nazla-talent.png'), title: "Penyanyi", gifBackground: require('../img/bg/bg-hover.png') },
  { name: "Talent 2", image: require('../img/talent/nazla-talent.png'), title: "Penari", gifBackground: require('../img/bg/bg-hover.png')},
  { name: "Talent 3", image: require('../img/talent/nazla-talent.png'), title: "Aktor", gifBackground: require('../img/bg/bg-hover.png')},
  { name: "Talent 4", image: require('../img/talent/nazla-talent.png'), title: "Model", gifBackground: require('../img/bg/bg-hover.png')},
  // Tambahkan lebih banyak talent jika diperlukan
];

function App() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <NewTalent talents={talents} />
    </div>
  );
}

export default App;