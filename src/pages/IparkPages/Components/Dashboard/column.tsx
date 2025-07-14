import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { FiGitBranch } from 'react-icons/fi';
import EmailIcon from '@mui/icons-material/Email';
import { PhoneAndroid } from '@mui/icons-material';

export const COLUMNS = () => [
  {
    Header: 'Valet Name',
    accessor: 'name', // Changed from salesmanName to name
    icon: <AccountCircleIcon />
  },

  {
    Header: 'Valet Phone',
    accessor: 'phone', // Assuming you may add this later in data
    icon: <PhoneAndroid />
  },

  {
    Header: 'Hotel Name',
    accessor: 'HotelName', // To access nested hotel ID
    icon: <BusinessIcon />
  },
  {
    Header: 'Branch Name',
    accessor: 'BranchName', // To access nested branch ID
    icon: <FiGitBranch />
  }
];
