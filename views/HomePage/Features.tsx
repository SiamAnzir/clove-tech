import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/services/ecommerce2.gif',
    title: 'eCommerce Platform Development',
    description: 'Build user-friendly eCommerce platforms with secure payments, inventory management, and personalized experiences..',
  },
  {
    imageUrl: '/services/pos-new.gif',
    title: 'POS and Inventory Solutions',
    description:
      'Streamline your operations with efficient point-of-sale systems and inventory management tools designed to improve accuracy and productivity.',
  },
  {
    imageUrl: '/services/saas.gif',
    title: 'SaaS Solutions',
    description: 'Leverage scalable and cost-effective SaaS applications tailored to your unique business requirements.',
  },

  {
    imageUrl: '/services/software.gif',
    title: 'Custom Software Development',
    description: 'Get personalized software solutions that align perfectly with your business objectives.',
  },
  {
    imageUrl: '/services/webapp.gif',
    title: 'Web and Mobile App Development',
    description: 'Engage your audience with sleek, responsive, and high-performing web and mobile applications.',
  },
  {
    imageUrl: '/services/cloud.gif',
    title: 'Cloud Integration',
    description: 'Optimize your infrastructure with secure and scalable cloud solutions for enhanced flexibility and performance.',
  },
  {
    imageUrl: '/services/consultation.gif',
    title: 'IT Consultation and Strategy',
    description:
      'Receive expert guidance to optimize your technology infrastructure, improve efficiency, and align IT strategies with your business objectives.',
  },
  {
    imageUrl: '/services/business.gif',
    title: 'Data Analytics and Business Intelligence',
    description:
      'Leverage data-driven insights to make informed decisions, enhance performance, and identify new opportunities for growth.',
  },
  {
    imageUrl: '/services/cybersecurity.gif',
    title: 'Cybersecurity Solutions',
    description:
      'Protect your business with robust cybersecurity measures, including threat detection, data encryption, and secure system architecture.',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
