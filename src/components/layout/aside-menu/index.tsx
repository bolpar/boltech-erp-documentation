import { MenuContent } from '../menu/menu-content'

export const AsideMenu = () => {
  return (
    <aside className="col-span-1 mb-10 h-full max-h-[80vh] overflow-y-auto max-[710px]:hidden">
      <nav className="w-full pl-8">
        <MenuContent />
      </nav>
    </aside>
  )
}