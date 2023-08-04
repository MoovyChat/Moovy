import React, { useEffect, useState } from 'react';
import {
  AdminUser,
  useGetAdminsAndModeratorsQuery,
} from '../../generated/graphql';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styled from 'styled-components';
import LogoLoading from '../logo-loading/logoLoading';
import { useNavigate } from 'react-router-dom';
import { sliceSetIsUserAdmin } from '../../redux/slices/miscSlice';
import { useIsUserAdmin } from '../../hooks/useIsUserAdmin';

const AdminIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuickActions = styled.div`
  display: grid; // Use CSS grid for more control over layout
  grid-template-columns: repeat(4, 1fr); // Create 4 evenly sized columns
  gap: 20px; // Add some space between items
  margin-top: 20px;
  width: 100%;
  padding: 0 20px; // Add some horizontal padding
`;
const ActionItem = styled.button`
  border: 1px solid #ccc;
  color: white;
  font-weight: 600;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  background-color: transparent; // Make the background transparent
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); // Add a box-shadow
  position: relative; // Added this to make sure the transform origin is within the button

  &:hover {
    background-color: rgba(
      0,
      0,
      0,
      0.1
    ); // Slightly darken the background on hover
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); // Darken the box-shadow on hover
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95); // Slightly shrink the button when clicked
  }
`;

const AdminIntro = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAdminOrMod, loading, adminError } = useIsUserAdmin();
  const loggedInUserName = useAppSelector(state => state.user.nickname);

  useEffect(() => {
    dispatch(sliceSetIsUserAdmin(isAdminOrMod));
  }, [isAdminOrMod]);

  if (loading) {
    return <LogoLoading />;
  }

  if (adminError) {
    return (
      <div>
        Error fetching admins and moderators. Please try refreshing the page.
      </div>
    );
  }

  return (
    <AdminIntroWrapper>
      <h1>
        {isAdminOrMod
          ? `Welcome, ${loggedInUserName}`
          : 'You do not have access to the page'}
      </h1>
      {isAdminOrMod && (
        <QuickActions>
          <ActionItem onClick={() => navigate('/admin/mail')}>Mail</ActionItem>
          <ActionItem onClick={() => navigate('/admin/database')}>
            Database
          </ActionItem>
          <ActionItem onClick={() => navigate('/admin/mail')}>
            Settings
          </ActionItem>
          <ActionItem onClick={() => navigate('/admin/mail')}>
            Reported Users
          </ActionItem>
        </QuickActions>
      )}
    </AdminIntroWrapper>
  );
};

export default AdminIntro;
