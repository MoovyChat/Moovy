import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';

import { StyledTitle } from './catalog.styles';
import { Title } from '../../generated/graphql';
import { useNavigate } from 'react-router-dom';

type props = {
  title: Title;
  parentRef: React.RefObject<HTMLDivElement>;
  index: number;
  totalItems: number;
};
const TitleCard: React.FC<props> = ({
  title,
  parentRef,
  index,
  totalItems,
}) => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const childRef = useRef<HTMLDivElement | null>(null);
  const [countOfItemsPerRow, setCountOfItemPerRow] = useState<number>(0);

  const [isLeft, setIsLeft] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(false);
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const [styledHover, setStyledHover] = useState<string>('');

  useEffect(() => {
    const parentWidth = parentRef.current?.offsetWidth!;
    const titleWidth = titleRef.current?.offsetWidth!;
    setCountOfItemPerRow(() => Math.floor(parentWidth / titleWidth));
    const countOfItemsInBottom =
      totalItems % countOfItemsPerRow === 0
        ? countOfItemsPerRow
        : totalItems % countOfItemsPerRow;

    if (index % countOfItemsPerRow !== 0 && index % countOfItemsPerRow !== 1) {
      setIsRight(() => false);
      setIsLeft(() => false);
    } else {
      if (index % countOfItemsPerRow === 0) {
        setIsLeft(() => false);
        setIsRight(() => true);
      }
      if (index % countOfItemsPerRow === 1) {
        setIsLeft(() => true);
        setIsRight(() => false);
      }
    }

    if (index <= countOfItemsPerRow) {
      setIsTop(() => true);
      setIsBottom(() => false);
    } else if (index > totalItems - countOfItemsInBottom) {
      setIsTop(() => false);
      setIsBottom(() => true);
    }
    // console.table({ isTop, isBottom, isLeft, isRight });
    const styledHover = hovered
      ? isLeft
        ? isTop
          ? 'translateX(-40%) translateY(-30%)'
          : isBottom
          ? 'translateX(-40%) translateY(-65%)'
          : 'translateX(-40%) translateY(-50%)'
        : isRight
        ? isTop
          ? 'translateX(-60%) translateY(-30%)'
          : isBottom
          ? 'translateX(-60%) translateY(-65%)'
          : 'translateX(-60%) translateY(-50%)'
        : isTop
        ? 'translateX(-50%) translateY(-30%)'
        : isBottom
        ? 'translateX(-50%) translateY(-70%)'
        : 'translateX(-50%) translateY(-50%)'
      : '';
    setStyledHover(() => styledHover);
  }, [parentRef.current, titleRef.current, hovered]);
  let timeout: any;
  const hoverHandler = (isHover: boolean) => {
    if (isHover) {
      timeout = setTimeout(() => {
        !hovered && setHovered(() => isHover);
      }, 500);
    } else {
      hovered && setHovered(() => isHover);
      timeout && clearTimeout(timeout);
    }
  };

  const titleClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    if (title.type === 'movie') {
      navigate(`/movie/${title.id}`);
    } else if (title.type === 'show') {
      navigate(`/show/${title.id}`);
    }
  };

  return (
    <StyledTitle
      hover={hovered}
      ref={titleRef}
      styledHover={styledHover}
      onClick={titleClickHandler}
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}>
      <div className='container' ref={childRef}>
        <div className='title-bg'>
          <img src={title.artwork as string} alt='title' loading='lazy' />
        </div>
        {hovered && (
          <div className='info'>
            <div className='title'>{title.title}</div>
            <div className='title-attr'>
              <div>{title.type}</div>
              {title.year !== 0 && <div>{title.year}</div>}
              <div>Rating: {title.rating}</div>
              {title.runtime !== 0 && (
                <div>{Math.round(title.runtime! / 60)} min</div>
              )}
            </div>
          </div>
        )}
      </div>
    </StyledTitle>
  );
};

export default TitleCard;
