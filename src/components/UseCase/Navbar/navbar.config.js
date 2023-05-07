import React, { useState, useRef } from 'react'

export default function NavbarConfig() {
  const [anchorElBuy, setAnchorElBuy] = useState(null)
  const [anchorElSell, setAnchorElSell] = useState(null)
  const [anchorElRent, setAnchorElRent] = useState(null)

  const anchorElBuyRef = useRef()
  const anchorElSellRef = useRef()
  const anchorElRentRef = useRef()

  const handleMouseEnterBuy = (event) => {
    setAnchorElBuy(anchorElBuyRef.current)
    setAnchorElSell(null)
    setAnchorElRent(null)
  }

  const handleMouseLeaveBuy = () => {
    setAnchorElBuy(null)
  }

  const handleMouseEnterSell = (event) => {
    setAnchorElSell(anchorElSellRef.current)
    setAnchorElBuy(null)
    setAnchorElRent(null)
  }

  const handleMouseLeaveSell = () => {
    setAnchorElSell(null)
  }

  const handleMouseEnterRent = (event) => {
    setAnchorElRent(anchorElRentRef.current)
    setAnchorElBuy(null)
    setAnchorElSell(null)
  }

  const handleMouseLeaveRent = () => {
    setAnchorElRent(null)
  }

  const handleMouseEnterInvest = () => {
    setAnchorElBuy(null)
    setAnchorElRent(null)
    setAnchorElSell(null)
  }

  const openBuy = Boolean(anchorElBuy)
  const openSell = Boolean(anchorElSell)
  const openRent = Boolean(anchorElRent)

  const NAVBAR_ITEMS = [
    {
      id: 'buyButton',
      onMouseEnter: handleMouseEnterBuy,
      label: 'Buy',
      open: openBuy,
      anchorEl: anchorElBuy,
      onMouseLeave: handleMouseLeaveBuy,
      ref: anchorElBuyRef,
      listArray: [
        'Buy a residential property',
        'Buy a commercial property',
        'Buy a plot',
      ],
      types: ['residential', 'commercial', 'plot'],
      purpose: 'buy',
    },
    {
      id: 'sellButton',
      onMouseEnter: handleMouseEnterSell,
      label: 'Sell',
      open: openSell,
      anchorEl: anchorElSell,
      onMouseLeave: handleMouseLeaveSell,
      ref: anchorElSellRef,
      listArray: ['Sell a property', 'Rentout a property'],
      types: ['add-property?purpose=sell', 'add-property?purpose=rent'],
    },
    {
      id: 'rentButton',
      onMouseEnter: handleMouseEnterRent,
      label: 'Rent',
      open: openRent,
      anchorEl: anchorElRent,
      onMouseLeave: handleMouseLeaveRent,
      ref: anchorElRentRef,
      listArray: [
        'Commercial property on rent',
        'Residential property on rent',
        'List my home for rent',
      ],
      types: ['commercial', 'residential', 'add-property'],
      purpose: 'rent',
    },
    {
      id: 'investButton',
      onMouseEnter: handleMouseEnterInvest,
      label: 'Invest',
    },
  ]
  return NAVBAR_ITEMS
}
