import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import GavelIcon from '@mui/icons-material/Gavel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { LocationOn } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Specific icon for username
import { Call } from '@mui/icons-material';

export const COLUMNS = () => [
  {
    Header: 'Hotel Name',
    accessor: 'name',
    icon: <BusinessIcon />
  },

  {
    Header: 'Hotel Phone',
    accessor: 'phone',
    icon: <Call />
  },

  {
    Header: 'Hotel Username',
    accessor: 'email',
    icon: <AccountCircleIcon /> // Unique icon for username
  },
  {
    Header: 'Hotel Password',
    accessor: 'password',
    icon: <LockIcon />
  },
  {
    Header: 'Address',
    accessor: 'address',
    icon: <LocationOn />
  },
  {
    Header: 'Created At',
    accessor: 'createdAt'
  }
];
