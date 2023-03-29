import styled from 'styled-components';

export const PrivacyPolicyWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: black;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const PrivacyPolicyContent = styled.div`
  background-color: #fff;
  color: black;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
`;

export const PrivacyPolicyTitle = styled.h2`
  margin-bottom: 20px;
`;

export const PrivacyPolicySectionTitle = styled.h3`
  margin-bottom: 10px;
`;

export const PrivacyPolicyParagraph = styled.p`
  margin-bottom: 20px;
`;

export const LastUpdated = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  text-align: right;
`;
