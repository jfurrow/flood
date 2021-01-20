import classnames from 'classnames';
import {FC, memo} from 'react';

interface CircleCheckmarkIconProps {
  className?: string;
}

const CircleCheckmarkIcon: FC<CircleCheckmarkIconProps> = memo(({className}: CircleCheckmarkIconProps) => (
  <svg className={classnames('icon', 'icon--circle-checkmark', className)} viewBox="0 0 60 60">
    <path fillOpacity="0.05" d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0Z" />
    <path
      fillOpacity="0.2"
      d="M30,0A30,30,0,1,0,60,30,30,30,0,0,0,30,0Zm0,56.47A26.47,26.47,0,1,1,56.47,30,26.47,26.47,0,0,1,30,56.47Z"
    />
    <polygon points="43.93 19.51 27.64 35.46 19.07 27.07 16.5 29.58 27.64 40.5 46.5 22.03 43.93 19.51" />
  </svg>
));

CircleCheckmarkIcon.defaultProps = {
  className: undefined,
};

export default CircleCheckmarkIcon;
