import { Flex, IconButton, Icon } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';
 
export function Header() {

  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  });

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >

      { !isWideVersion  && (
        <IconButton 
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          mr='2'
          onClick={onOpen}
          aria-label='Open Navigation'
        />
      )}

      <Logo />      
      {isWideVersion && <SearchBox />}
      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}