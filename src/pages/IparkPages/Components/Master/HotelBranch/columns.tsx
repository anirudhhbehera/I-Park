import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey'; // Icon for password
import { FiGitBranch } from 'react-icons/fi';
import EmailIcon from '@mui/icons-material/Email';
import { PhoneAndroid } from '@mui/icons-material';
import { Call } from '@mui/icons-material';

export const COLUMNS = () => [
  {
    Header: 'Hotel Name',
    accessor: 'hotelname',
    icon: <BusinessIcon /> // Business icon represents the company
  },
  {
    Header: 'Hotel Branch Name',
    accessor: 'name',
    icon: <FiGitBranch /> // Domain icon represents a branch
  },
  {
    Header: 'Hotel Branch Phone',
    accessor: 'phone',
    icon: <Call /> // Domain icon represents a branch
  },

  {
    Header: 'Hotel Branch Address',
    accessor: 'address',
    icon: <LocationOnIcon /> // Location icon for branch location
  },
  {
    Header: 'User Name',
    accessor: 'email',
    icon: <AccountCircleIcon /> // AccountCircle icon for username
  },
  {
    Header: 'Password',
    accessor: 'password',
    icon: <VpnKeyIcon /> // VpnKey icon for password
  }
];
