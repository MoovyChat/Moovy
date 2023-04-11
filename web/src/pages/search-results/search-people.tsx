import { Users, useSearchPeopleQuery } from '../../generated/graphql';
import { useEffect, useState } from 'react';

import { CURRENT_DOMAIN } from '../../constants';
import EmptyPage from '../../components/empty-page/emptyPage';
import { Helmet } from 'react-helmet';
import Loading from '../loading/loading';
import PeopleCard from '../../components/people-card/peopleCard';
import { StyledSearchPeople } from './searchResults.styles';
import usePageView from '../../hooks/usePageView';
import { useParams } from 'react-router-dom';

const SearchPeople = () => {
  const { search } = useParams();
  const [people, setPeople] = useState<Users[]>([]);
  const [{ data, fetching, error }] = useSearchPeopleQuery({
    variables: {
      search: search!,
      page: 1,
      limit: 20,
    },
  });

  usePageView();
  useEffect(() => {
    if (error) console.log(error);
    if (data && !fetching) {
      const _data = data.searchPeople;
      const _people = _data?.people!;
      setPeople(() => _people);
    }
  }, [data, fetching, error]);
  if (fetching) return <Loading />;
  if (people.length <= 0)
    return <EmptyPage msg={`No users found matching "${search}"`} />;
  return (
    <StyledSearchPeople>
      <Helmet>
        <title>{`${search}: People`}</title>
        <meta name="description" content={`${search}: People`} />
        <link
          rel="canonical"
          href={`${CURRENT_DOMAIN}/search/${search}/people}`}
        />
      </Helmet>
      {people && people.map(user => user && <PeopleCard key={user.id} user={user} />)}
    </StyledSearchPeople>
  );
};

export default SearchPeople;
