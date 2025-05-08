import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import GavelIcon from '@mui/icons-material/Gavel';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { LocationOn } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Call } from '@mui/icons-material';

export const COLUMNS = () => [
  {
    Header: 'User Name',
    accessor: 'userName',
    icon: <AccountCircleIcon />
  },
  {
    Header: 'Email',
    accessor: 'email',
    icon: <EmailIcon />
  },
  {
    Header: 'Phone',
    accessor: 'phone',
    icon: <Call />
  },
  {
    Header: 'Password',
    accessor: 'password',
    icon: <LockIcon />
  },
  {
    Header: 'Address',
    accessor: 'address',
    icon: <LocationOn />
  },
  // {
  //   Header: 'Hotel Name',
  //   accessor: 'hotelId.name',
  //   icon: <BusinessIcon />
  // },
  // {
  //   Header: 'Hotel Email',
  //   accessor: 'hotelId.email',
  //   icon: <EmailIcon />
  // },
  // {
  //   Header: 'Hotel Address',
  //   accessor: 'hotelId.address',
  //   icon: <LocationOn />
  // },
  // {
  //   Header: 'Hotel Phone',
  //   accessor: 'hotelId.phone',
  //   icon: <Call />
  // },
  {
    Header: 'Assigned Branches',
    accessor: 'assignedBranchNames', // This will be an array; you can customize rendering
    icon: <AccountBalanceIcon />
  },
  {
    Header: 'Created At',
    accessor: 'createdAt'
  }
  // {
  //   Header: 'Updated At',
  //   accessor: 'updatedAt'
  // }
];
