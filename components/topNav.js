import styled from 'styled-components';

// const nav = [{ name: '', href: '' }];

// const navItems = nav.map((item) => {
//   return (
//     <NavItem>
//       <a href={} className="nav-link"></a>
//     </NavItem>
//   )
// })

const TopNav = () => {
  return (
    <nav className='nav'>
      <NavList>
        <NavItem>
          <a href='/' className='nav-link'>
            Home
          </a>
        </NavItem>
        <NavItem>
          <a href='#about' className='nav-link'>
            About
          </a>
        </NavItem>
        <NavItem>
          <a href='#projects' className='nav-link'>
            Projects
          </a>
        </NavItem>
        <NavItem>
          <a href='#writing' className='nav-link'>
            Writing
          </a>
        </NavItem>
        <NavItem>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
        </NavItem>
      </NavList>
    </nav>
  );
};

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  padding: 0.8em 0;
`;

export default TopNav;
