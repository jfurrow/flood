import classnames from 'classnames';
import {FC, memo} from 'react';

interface InfinityIconProps {
  className?: string;
}

const InfinityIcon: FC<InfinityIconProps> = memo(({className}: InfinityIconProps) => (
  <svg className={classnames('icon', 'icon--infinity', className)} viewBox="0 0 60 60">
    <path d="M30,33.17l-5.84,5.16a12.2,12.2,0,0,1-8.27,3.46,11.32,11.32,0,0,1-8.39-3.51,11.66,11.66,0,0,1,0-16.6,11.45,11.45,0,0,1,8.36-3.46,12.06,12.06,0,0,1,8.27,3.46L30,26.77l5.84-5.1a12.4,12.4,0,0,1,8.33-3.46A11.9,11.9,0,0,1,56,30a11.41,11.41,0,0,1-3.46,8.27,11.32,11.32,0,0,1-8.39,3.51,12.26,12.26,0,0,1-8.33-3.46ZM26.46,30l-5.61-5a7.4,7.4,0,0,0-5-2.1,6.81,6.81,0,0,0-5,2.1,6.81,6.81,0,0,0-2.1,5,6.88,6.88,0,0,0,2.07,5,6.74,6.74,0,0,0,5,2.12,7.39,7.39,0,0,0,5-2.1Zm6.91-.06,5.78,5a7.47,7.47,0,0,0,5,2.1,6.79,6.79,0,0,0,5-2.1,6.86,6.86,0,0,0,2.07-5,6.79,6.79,0,0,0-2.1-5,6.86,6.86,0,0,0-5-2.07,7.62,7.62,0,0,0-5,2.1Z" />
  </svg>
));

InfinityIcon.defaultProps = {
  className: undefined,
};

export default InfinityIcon;
