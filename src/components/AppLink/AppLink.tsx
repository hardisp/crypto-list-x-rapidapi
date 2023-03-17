import { Text, TextProps } from '@chakra-ui/react'
import { Link as RouteLink, LinkProps as RouteLinkLinkProps } from 'react-router-dom'

export default function AppLink({
  className,
  to,
  childClassName,
  ...props
}: TextProps &
  RouteLinkLinkProps & {
    childClassName?: string
  }) {
  const classNames = ['router-link', className].join(' ')
  return (
    <RouteLink to={to} className={classNames}>
      <Text as={'span'} className={childClassName} {...props} />
    </RouteLink>
  )
}
