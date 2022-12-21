import React, { useRef } from 'react';

import { CatalogParent } from './catalog.styles';
import { Title } from '../../generated/graphql';
import TitleCard from './titleCard';

type props = {
  parentRef: React.RefObject<HTMLDivElement>;
  titles: Title[] | null;
};
const CatalogTemplate: React.FC<props> = ({ parentRef, titles }) => {
  if (titles!.length <= 0)
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
        }}>
        Catalog is empty
      </div>
    );

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
