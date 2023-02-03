// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Farmers',
      icon: AccountCogOutline,
      path: '/evoucher'
    },
    {
      title: 'Evoucher',
      icon: Login,
      path: '/evoucher',
      openInNewTab: true
    },
    {
      title: 'User Management',
      icon: AccountPlusOutline,
      path: '/users',
      openInNewTab: true
    },
    {
      title: 'User Roles',
      icon: AlertCircleOutline,
      path: '/roles',
      openInNewTab: true
    },
    {
      title: 'User Permissions',
      icon: FormatLetterCase,
      path: '/permissions'
    },
    {
      title: 'Setup',
      path: '/setup',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Profile',
      icon: CreditCardOutline,
      path: '/profile'
    }
  ]
}

export default navigation
