import * as React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Image from 'components/Base/ImageComponent'
import CardActions from '@mui/material/CardActions'

const placeHolder = '/images/card.png'

export default function CardComponent({
  children,
  maxWidth,
  image,
  imageWidth,
  imageHeight,
  renderCardAction,
  ...otherProps
}) {
  return (
    <Card
      sx={{
        maxWidth: maxWidth,
      }}
      {...otherProps}
    >
      <Image
        height={imageHeight}
        width={imageWidth || maxWidth}
        source={image}
        alt="green iguana"
      />
      <CardContent {...otherProps}>{children}</CardContent>

      {renderCardAction && <CardActions>{renderCardAction}</CardActions>}
    </Card>
  )
}
CardComponent.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
  maxWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
}
CardComponent.defaultProps = {
  children: <></>,
  image: placeHolder,
  maxWidth: '345px',
  imageHeight: '140px',
  imageWidth: '345px',
}
