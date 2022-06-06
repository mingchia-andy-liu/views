import { badgen } from "badgen"

export const getName = (url: URL) => {
  let pathname = url.pathname

  if (pathname.startsWith('/')) {
    pathname = pathname.slice(1)
  }
  if (pathname === '') {
    throw new Error('home route not supported')
  }
  if (pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }

  const paths = pathname.split('/')
  if (paths.length != 1) {
    throw new Error('nested route')
  }

  return pathname
}

export const generateBadgeSvg = (name: string, value: string) => {
  return badgen({
    label: name,
    status: value,
    color: 'green',
  })
}