import React, { UIEventHandler, useEffect, useRef, useState } from 'react';

import { CatalogParent } from './catalog.styles';
import { Title } from '../../generated/graphql';
import TitleCard from './titleCard';

type props = {
  parentRef: React.RefObject<HTMLDivElement>;
  titles: Title[] | null;
  setPage: any;
  page: number;
  lastPage: number;
};

const CatalogTemplate: React.FC<props> = ({
  parentRef,
  titles,
  setPage,
  page,
  lastPage,
}) => {
  const handleScroll: UIEventHandler<HTMLDivElement> = e => {
    e.stopPropagation();
    const target = e.target as HTMLDivElement;
    if (target.scrollHeight - target.scrollTop - 2 <= target.clientHeight) {
      if (page !== lastPage) {
        setPage((p: number) => p + 1);
      }
    }
  };
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
        }}
      >
        Catalog is empty
      </div>
    );

  return (
    <CatalogParent ref={parentRef} onScroll={handleScroll}>
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
