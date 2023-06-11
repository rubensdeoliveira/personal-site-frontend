import { Navbar, Text } from '@rubensdeoliveira-ui/react'
import { Button, Logo } from '../../components'
import Link from 'next/link'
import { menuItems } from './constants'
import { useRouter } from 'next/router'

export function Header() {
  const { asPath } = useRouter()

  return (
    <header className="w-full flex justify-center bg-mainOne">
      <div className="w-full max-w-[1200px]">
        <Navbar
          mobileButtonClassName="text-white"
          wrapperClassName="py-[1.0625rem] md:py-[2.1875rem] lg:py-[2.625rem] w-full px-4 md:px-8 xl:px-0"
          logo={
            <Link href={'/'}>
              <Logo />
            </Link>
          }
          navigationItems={
            <ul className="gap-2 mb-3 md:mb-0 mt-[20px] md:mt-[0px] flex flex-col items-center md:flex-row md:gap-[3.125rem] flex-1 justify-end">
              {menuItems.map((menuItem) => (
                <li key={menuItem.label}>
                  <Link href={menuItem.link} className="">
                    <Text
                      lineHeight={'1.2'}
                      fontSize={'16'}
                      fontWeight={asPath === menuItem.link ? '700' : '400'}
                      className={`${
                        asPath === menuItem.link ? 'text-mainTwo underline' : ''
                      } font-quicksand`}
                    >
                      {menuItem.label}
                    </Text>
                  </Link>
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </header>
  )
}
