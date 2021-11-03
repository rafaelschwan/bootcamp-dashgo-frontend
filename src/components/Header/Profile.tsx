import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({showProfileData = true}:ProfileProps) {
  return (
    <Flex align='center'>
        {showProfileData && 
          (<Box mr='4' textAlign='right'>
              <Text>Rafael Schwan</Text>
              <Text color='gray.300' fontSize='small'>
                rafaelschwan@hotmail.com
              </Text>
          </Box>)
        }
      <Avatar size='md' name='Rafael Schwan' src='https://avatars.githubusercontent.com/u/51935144?v=4' />
    </Flex>
  );
}