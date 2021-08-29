import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES, COLORS } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <SubLink href='#0'>Already a subscriber?</SubLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  } ;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    position: relative;
    display: revert;
    justify-self: end;
  }
`;

const SubLink = styled.a`
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: ${14 / 16}rem;
  text-decoration: underline;
  font-style: italic;
  color: ${COLORS.gray[900]};
  margin-top: 8px;
`;

export default Header;
