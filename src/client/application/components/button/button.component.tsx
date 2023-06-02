import {
  Button as RDOButton,
  ButtonRootProps
} from '@rubensdeoliveira-ui/react'
import { FaUserAlt, FaWhatsapp } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { HiOutlineArrowRight } from 'react-icons/hi'

type ButtonProps = Omit<ButtonRootProps, 'children'> & {
  label: string
  className?: string
  buttonType?: 'link' | 'default'
  iconLeft?: 'download'
  iconRight?: 'arrowRight'
}

export function Button({
  label,
  className,
  buttonType = 'default',
  iconLeft,
  iconRight,
  ...props
}: ButtonProps) {
  function renderIconLeft() {
    switch (iconLeft) {
      case 'download':
        return (
          <FiDownload className="text-[1.125rem] md:text-[1.4375rem] lg:text-[1.75rem] text-mainTwo" />
        )
      default:
        null
    }
  }

  function renderIconRight() {
    switch (iconRight) {
      case 'arrowRight':
        return (
          <HiOutlineArrowRight className="text-[1.125rem] md:text-[1.4375rem] lg:text-[1.75rem]" />
        )
      default:
        null
    }
  }

  return (
    <RDOButton.Root
      {...props}
      paddingHorizontal={buttonType === 'default' ? ['36', '39', '42'] : '0'}
      paddingVertical={buttonType === 'default' ? ['14', '15', '16'] : '0'}
      className={`gap-4 text-mainTwo ${className} ${
        buttonType === 'default'
          ? 'border-mainTwo border-[1px] border-solid hover:bg-mainTwo hover:text-mainOne transition-colors'
          : ''
      }`}
    >
      {renderIconLeft()}
      <RDOButton.Text
        className={`${
          buttonType === 'default'
            ? 'font-quicksand'
            : 'font-montserrat underline'
        }`}
        fontSize={
          buttonType === 'default' ? ['14', '16', '18'] : ['12', '14', '16']
        }
        lineHeight={'1.3'}
        fontWeight={'500'}
      >
        {label}
      </RDOButton.Text>
      {renderIconRight()}
    </RDOButton.Root>
  )
}
