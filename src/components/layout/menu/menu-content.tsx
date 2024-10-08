'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { useState } from 'react'
import { MenuLink } from '../aside-menu/menu-link'
import { NavItem } from '../aside-menu/nav-item'
import { NAV_ITEMS } from '../aside-menu/nav-items-data'

export const MenuContent = () => {
  const [openItems, setOpenItems] = useState<string[]>([])

  function closeAllItems() {
    setOpenItems([])
  }

  return (
    <Accordion.Root type='multiple' value={openItems} onValueChange={setOpenItems}>
      <MenuLink title='Introdução' href='/introducao' />
      <MenuLink title='Benefícios e Objetivos' href='/beneficios-objetivos' />
      <MenuLink title='Iniciando no ERP' href='/iniciando-erp' />
      <MenuLink title='Sobre a Boltech' href='/sobre-boltech' />

      <div className='my-4 h-px w-full bg-neutral-200' />

      {NAV_ITEMS.map((navItem, index) => {
        return (
          <Accordion.Item key={index} value={`item-${index + 1}`}>
            <NavItem {...navItem} closeItems={closeAllItems} />
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  )
}