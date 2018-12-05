/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';


const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-24 text-white')};
  background: ${props => props.bg};
  background-image: url(${props => props.bgi});
  background-size: cover;
  background-position: center;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

// const Filter = styled.div`
// ${tw('shadow-lg relative no-underline rounded-lg lg:invisible xl:invisible')};
// background: rgba(34,41,47, 0.8);
// padding: 15px;
// `;
//OLD CSS, for reference
// ${tw('rounded-lg font-sans text-sm md:text-base relative lg:hover:text-white lg:text-transparent xl:hover:text-white xl:text-transparent sm:text-white sm:bg-black md:text-white md:bg-black')};
const Text = styled.div`
${tw('rounded-lg font-sans text-sm md:text-base relative hover:text-white text-transparent')};
padding: 15px;
&:hover {
      background: rgba(34,41,47, 0.85);
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }
`;

const Title = styled.div`
  ${tw('uppercasetext-white text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans font-extrabold pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.95);
`;

const ProjectCard = ({ title, link, children, bg, bgi }) => (
  <Wrapper href={link} target="_blank" rel="noopener noreferrer" bg={bg} bgi={bgi} >
    {/* <Filter> */}
    {/* </Filter> */}
    <Text>{children}</Text>
    <Title>{title}</Title>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string,
  bgi: PropTypes.string
};
