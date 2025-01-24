/* eslint-disable @typescript-eslint/no-unused-vars */

import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';
import RichText from 'components/RichText';

export default function Cta() {
  return (
    <CtaWrapper id="vision">
      <Container>
        <Stack>
          <OverTitle>Our Vision & Values</OverTitle>
          <SectionTitle>To become a leading provider of innovative tech solutions that drive business success globally.</SectionTitle>
          <Description>
            At Clove Tech Solutions, our vision is guided by these core values:
            <RichText>
              <ul>
                <li>Innovation: Pioneering creative solutions for modern challenges.</li>
                <li>Customer-Centric Approach: Your goals are our top priority.</li>
                <li>Reliability: Delivering consistent and dependable solutions.</li>
              </ul>
            </RichText>
          </Description>
          {/* <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button>
                Subscribe to the newsletter <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup> */}
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
