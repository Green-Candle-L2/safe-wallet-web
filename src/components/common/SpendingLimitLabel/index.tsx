import React, { type ReactElement } from 'react'
import { Box, SvgIcon, Typography } from '@mui/material'
import SpeedIcon from '@/public/images/settings/spending-limit/speed.svg'
import type { BoxProps } from '@mui/system'

const SpendingLimitLabel = ({
  label,
  isOneTime = false,
  ...rest
}: { label: string | ReactElement; isOneTime?: boolean } & BoxProps) => {
  return (
    <Box
      {...rest}
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        },
        ...(Array.isArray(rest.sx) ? rest.sx : [rest.sx]),
      ]}
    >
      {!isOneTime && <SvgIcon component={SpeedIcon} inheritViewBox color="border" fontSize="medium" />}
      {typeof label === 'string' ? <Typography>{label}</Typography> : label}
    </Box>
  )
}

export default SpendingLimitLabel
