import React from 'react';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomIcon from './CustomIcon';
import {COLORS} from '../theme/theme';

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

interface RenderCustomIconProps {
  focused: boolean;
  name?: string;
  size: keyof typeof IconSizes;
  color?: string;
}

export const CustomIconComponent: React.FC<RenderCustomIconProps> = ({
  focused,
  size,
  name = 'home',
  color,
}) => (
  <CustomIcon
    name={name}
    size={IconSizes[size]}
    color={
      color || (focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex)
    }
  />
);

// export interface CustomIconProps {
//   focused: boolean;
//   size: number; // Keep as number since it will be resolved from IconSizes
//   name?: string;
//   color?: string;
// }

// export const CustomIconComponent: React.FC<CustomIconProps> = ({
//   focused,
//   size,
//   name = 'home',
//   color,
// }) => (
//   <CustomIcon
//     name={name}
//     size={size}
//     color={
//       color || (focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex)
//     }
//   />
// );
// export const drawerCustomIcon = ({
//   focused,
//   name = 'home',
//   size,
//   color,
// }: RenderCustomIconProps) => (
//   <Icon
//     name={name}
//     size={IconSizes[size]}
//     color={
//       color || (focused ? COLORS.primaryWhiteHex : COLORS.primaryLightGreyHex)
//     }
//   />
// );
