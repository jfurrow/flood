import classnames from 'classnames';
import {FC, memo} from 'react';

interface LockIconProps {
  className?: string;
}

const LockIcon: FC<LockIconProps> = memo(({className}: LockIconProps) => (
  <svg className={classnames('icon', 'icon--lock', className)} viewBox="0 0 60 60">
    <path
      d="M9.917 27.364h1.305v-7.91C11.222 9.322 19.464 1 29.5 1c10.036 0 18.278 8.321 18.278 18.455v7.909H9.917zm9.139 0h20.888v-7.91c0-5.808-4.691-10.545-10.444-10.545-5.753 0-10.444 4.737-10.444 10.546v7.909z"
      fillOpacity=".4"
    />
    <path d="M6 27.364h46.819V59H6z" />
  </svg>
));

LockIcon.defaultProps = {
  className: undefined,
};

export default LockIcon;
