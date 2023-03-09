import {
  CheckCircleIcon,
  CheckboxWrapper,
  Container,
  DeleteIcon,
  FullMessageContainer,
  Header,
  MessageWrapper,
  OptionButton,
  OptionsWrapper,
  PaginationButton,
  PaginationWrapper,
  SenderWrapper,
  StyledAdmin,
} from './admin.styles';
import {
  Contact,
  useGetAllMessagesQuery,
  useMarkMessageAsReadMutation,
} from '../../generated/graphql';
import React, { MouseEventHandler, useState } from 'react';
import { getDateFormat, getShortDateFormat } from '../../utils/helpers';

import Loading from '../loading/loading';
import Moovy from '../../svgs/moovy-text-logo-white.png';
import { StyledSplashScreen } from '../splash-screen/splashScreen.styles';

interface AdminProps {}

const Admin: React.FC<AdminProps> = () => {
  const [page, setPage] = useState<number>(1);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [checkedContacts, setCheckedContacts] = useState<Contact[]>([]);
  const [, markMessageAsRead] = useMarkMessageAsReadMutation();
  const [{ data, fetching, error }] = useGetAllMessagesQuery({
    variables: { page, limit: 10, read: false },
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const readMessage: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    markMessageAsRead({ markMessageAsReadId: (e.target as HTMLElement).id });
  };

  const contacts: Contact[] = data?.getAllMessages || [];
  if (fetching) {
    return (
      <StyledSplashScreen>
        <div className='logo'>
          <img src={Moovy} alt='Moovy' />
        </div>
        <div className='loading'>
          <Loading />
        </div>
      </StyledSplashScreen>
    );
  }
  return (
    <StyledAdmin>
      <div className='logo'>
        <img src={Moovy} alt='Moovy' />
      </div>
      <div className='parent-container'>
        <div className='comments-container'>
          <Header>
            <CheckboxWrapper>
              <input
                type='checkbox'
                onChange={(e) => {
                  e.stopPropagation();
                  if (e.target.checked) setCheckedContacts(contacts);
                  else setCheckedContacts([]);
                }}
              />
            </CheckboxWrapper>
            <div className='title'>
              {checkedContacts.length > 0
                ? `Selected ${checkedContacts.length} items`
                : 'Admin Inbox'}
            </div>
            {checkedContacts.length > 0 && (
              <OptionsWrapper className='options'>
                <OptionButton>
                  <div className='dft-btn'>Mark as Read</div>
                </OptionButton>
                <OptionButton>
                  <DeleteIcon size={20} />
                </OptionButton>
              </OptionsWrapper>
            )}
          </Header>
          {contacts.map((contact) => (
            <Container
              read={contact.read}
              key={contact.id}
              id={contact.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedContact(contact);
                markMessageAsRead({
                  markMessageAsReadId: contact.id,
                });
              }}>
              <CheckboxWrapper>
                <input
                  type='checkbox'
                  checked={checkedContacts.some((c) => c.id === contact.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    const value = e.target.checked;
                    setCheckedContacts((contacts) => {
                      if (value) return [...contacts, contact];
                      else return contacts.filter((c) => c.id !== contact.id);
                    });
                  }}
                />
              </CheckboxWrapper>
              <SenderWrapper>{contact.name}</SenderWrapper>
              <MessageWrapper>{contact.message}</MessageWrapper>
              {checkedContacts.some((c) => c.id === contact.id) ? (
                <OptionsWrapper>
                  <OptionButton
                    id={contact.id}
                    onClick={readMessage}
                    className='icon-btn'>
                    <CheckCircleIcon size={20} />
                  </OptionButton>
                  <OptionButton className='icon-btn' id={contact.id}>
                    <DeleteIcon size={20} />
                  </OptionButton>
                </OptionsWrapper>
              ) : (
                <OptionsWrapper>
                  <div className='time'>{getDateFormat(contact.createdAt)}</div>
                </OptionsWrapper>
              )}
            </Container>
          ))}

          <PaginationWrapper>
            <PaginationButton
              disabled={page <= 1}
              onClick={() => setPage((p) => p - 1)}>
              Previous
            </PaginationButton>
            <PaginationButton
              disabled={contacts.length < 10}
              onClick={() => setPage((p) => p + 1)}>
              Next
            </PaginationButton>
          </PaginationWrapper>
        </div>
        <FullMessageContainer className='full-message-container'>
          {selectedContact && (
            <div className='content'>
              <div className='name'>{selectedContact.name}</div>
              <div className='time'>
                {getShortDateFormat(selectedContact.createdAt)}
              </div>
              <div className='message'>{selectedContact.message}</div>
            </div>
          )}
        </FullMessageContainer>
      </div>
    </StyledAdmin>
  );
};

export default Admin;
