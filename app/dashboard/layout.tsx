'use client'

import { Sidebar } from '@/components/(dashboard)/sidebar'
import { TopNavbar } from '@/components/(dashboard)/top-navbar'
import { SidebarProvider } from '@/contexts/sidebar-context'
import { useSidebar } from '@/contexts/sidebar-context'

function DashboardContent({
  children,
}: {
  children: React.ReactNode
}) {
  const { isCollapsed } = useSidebar()
  // On mobile: no margin (sidebar is overlay), on lg+: margin based on collapse state
  const sidebarMargin = isCollapsed ? 'lg:ml-20' : 'lg:ml-64'

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarMargin}`}>
        {/* Top Navbar */}
        <TopNavbar />

        {/* Content Area - with top padding for fixed navbar */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <DashboardContent>{children}</DashboardContent>
    </SidebarProvider>
  )
}
