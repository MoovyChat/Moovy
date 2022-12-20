import React, { useRef } from 'react';

import { CatalogParent } from './catalog.styles';
import { Title } from '../../generated/graphql';
import TitleCard from './titleCard';

type props = {
  parentRef: React.RefObject<HTMLDivElement>;
  titles: Title[] | null;
};
const CatalogTemplate: React.FC<props> = ({ parentRef, titles }) => {
  return (
    <CatalogParent ref={parentRef}>
      {titles &&
        titles.map((title, index) => (
          <TitleCard
            title={title}
            parentRef={parentRef}
            index={index + 1}
            totalItems={titles.length!}
            key={title.id!}
          />
        ))}
    </CatalogParent>
  );
};

export default CatalogTemplate;
