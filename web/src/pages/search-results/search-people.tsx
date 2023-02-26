import React, { useEffect, useState } from 'react';
import { User, useSearchPeopleQuery } from '../../generated/graphql';

import EmptyPage from '../../components/empty-page/emptyPage';
import Loading from '../loading/loading';
import PeopleCard from '../../components/people-card/peopleCard';
import { StyledSearchPeople } from './searchResults.styles';
import { useParams } from 'react-router-dom';

const SearchPeople = () => {
  const { search } = useParams();
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [people, setPeople] = useState<User[]>([]);
  const [{ data, fetching, error }] = useSearchPeopleQuery({
    variables: {
      search: search!,
      page: page,
      limit: 10,
    },
  });
  useEffect(() => {
    if (error) console.log(error);
    if (data && !fetching) {
      const _data = data.searchPeople;
      const _lastPage = _data?.lastPage!;
      setLastPage(() => _lastPage);
      const _people = _data?.people!;
      setPeople(() => _people);
    }
  }, [data, fetching, error]);
  if (fetching) return <Loading />;
  if (people.length <= 0)
    return <EmptyPage msg={`No users found matching "${search}"`} />;
  return (
    <StyledSearchPeople>
      {people && people.map((user) => <PeopleCard user={user} />)}
    </StyledSearchPeople>
  );
};

export default SearchPeople;
