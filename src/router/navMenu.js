const menuItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
    children: [
      {
        label: 'Career',
        href: '/about/career',
      },
      {
        label: 'Hobbies',
        href: '/about/hobbies',
      },
      {
        label: 'Education',
        href: '/about/education',
      },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default menuItems
