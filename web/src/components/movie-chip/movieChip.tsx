import './movieChip.css';

import React from 'react';

type props = {
  name: string;
};
const MovieChip: React.FC<props> = ({ name }) => {
  return (
    <div
      className="chip"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      {name}
    </div>
  );
};

export default MovieChip;
