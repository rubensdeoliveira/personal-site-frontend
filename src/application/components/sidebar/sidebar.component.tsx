import { useSidebar } from '@/application/hooks'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SidebarNav } from './components'
import { SidebarModel } from './models'

export function Sidebar({ menuItems }: SidebarModel) {
  const { isOpen, onClose } = useSidebar()

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p={'1.6rem'}>
            <DrawerCloseButton mt={'2.4rem'} />
            <DrawerHeader>Navegaçāo</DrawerHeader>
            <DrawerBody>
              <SidebarNav menuItems={menuItems} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w={'256px'} mr={'3.2rem'} flexShrink={0}>
      <SidebarNav menuItems={menuItems} />
    </Box>
  )
}
