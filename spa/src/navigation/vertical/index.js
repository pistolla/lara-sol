// ** Icon imports
import { FcCollect, FcConferenceCall, FcDoughnutChart, FcManager, FcKey,FcPortraitMode, FcServices, FcBusinessman } from "react-icons/fc";

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: FcDoughnutChart,
      path: '/'
    },
    {
      title: 'Farmers',
      icon: FcConferenceCall,
      path: '/farmers'
    },
    {
      title: 'Evoucher',
      icon: FcCollect,
      path: '/evoucher',
      openInNewTab: true
    },
    {
      title: 'User Management',
      icon: FcManager,
      path: '/users',
      openInNewTab: true
    },
    {
      title: 'User Roles',
      icon: FcPortraitMode,
      path: '/roles',
      openInNewTab: true
    },
    {
      title: 'User Permissions',
      icon: FcKey,
      path: '/permissions'
    },
    {
      title: 'Setup',
      path: '/setup',
      icon: FcServices
    },
    {
      title: 'Profile',
      icon: FcBusinessman,
      path: '/profile'
    }
  ]
}

export default navigation
