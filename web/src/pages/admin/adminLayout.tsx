import { useState } from 'react';
import { FaCog, FaDatabase, FaUser } from 'react-icons/fa';
import { MdEmail, MdFlag, MdReport } from 'react-icons/md';
import { Outlet } from 'react-router-dom';
import {
  NavBar,
  NavItem,
  StyledAdminLayout,
  StyledLeftNavBar,
  StyledRightContainer,
} from './adminLayout.styles';
import { LOGO_128 } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import Spline from '@splinetool/react-spline';

const AdminLayout = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isUserAdmin = useAppSelector(state => state.misc.isUserAdmin);

  return (
    <StyledAdminLayout isHovered={isHovered}>
      <Spline
        scene="https://prod.spline.design/GWU-CMRxOgzCu4Zj/scene.splinecode"
        className="spline-bg"
      />

      {isUserAdmin && (
        <StyledLeftNavBar
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isHovered={isHovered}
          className="admin-left"
        >
          <NavBar className="nav-link">
            <NavItem to="/admin/mail">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="text">Mail</div>
            </NavItem>
            <NavItem to="/admin/database">
              <div className="icon">
                <FaDatabase />
              </div>
              <span className="text">Database</span>
            </NavItem>
            <NavItem to="/admin/settings">
              <div className="icon">
                <MdFlag />
              </div>
              <span className="text">Flagged Comments</span>
            </NavItem>
            <NavItem to="/admin/settings">
              <div className="icon">
                <MdReport />
              </div>
              <span className="text">Reported Users</span>
            </NavItem>
          </NavBar>
        </StyledLeftNavBar>
      )}
      <StyledRightContainer className="admin-container">
        <div className="admin-header">
          <div className="logo">
            <img src={LOGO_128} alt="Moovy" />
          </div>
          <div className="heading-text">Admin Dashboard</div>
        </div>
        <Outlet />
      </StyledRightContainer>
    </StyledAdminLayout>
  );
};

export default AdminLayout;
