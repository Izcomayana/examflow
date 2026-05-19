'use client'

import { Bell, Settings, Menu } from 'lucide-react'
import { useSidebar } from '@/contexts/sidebar-context'

export function TopNavbar() {
  const { isCollapsed, toggleSidebar } = useSidebar()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'
  const leftOffset = isCollapsed ? 'left-0 lg:left-20' : 'left-0 lg:left-64'

  return (
    <div className={`h-20 bg-white border-b border-border flex items-center justify-between px-4 md:px-8 fixed top-0 right-0 z-30 transition-all duration-300 ${leftOffset}`}>
      {/* Left Section - Toggle & Greeting */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
          title="Toggle sidebar"
        >
          <Menu className="w-5 h-5 text-foreground" />
        </button>
        <div className="hidden sm:block">
          <h1 className="text-xl md:text-2xl font-bold text-foreground">{greeting}, Admin 👋</h1>
          <p className="text-xs md:text-sm text-muted-foreground">Manage examination scheduling efficiently.</p>
        </div>
      </div>

      {/* Right Section - Search, Notifications, Profile */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Notification Bell */}
        <button className="p-2 hover:bg-muted rounded-lg transition-colors relative group hidden sm:block">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          <div className="absolute right-0 top-full mt-2 hidden group-hover:block bg-white border border-border rounded-lg shadow-lg p-4 w-80 z-50">
            <p className="text-sm font-semibold text-foreground mb-3">Notifications</p>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              <div className="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors cursor-pointer">
                <p className="text-sm font-medium text-foreground">Schedule Generated Successfully</p>
                <p className="text-xs text-muted-foreground mt-1">3 minutes ago</p>
              </div>
              <div className="p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors cursor-pointer">
                <p className="text-sm font-medium text-foreground">Conflict Detected</p>
                <p className="text-xs text-muted-foreground mt-1">15 minutes ago</p>
              </div>
            </div>
          </div>
        </button>

        {/* Settings */}
        <button className="p-2 hover:bg-muted rounded-lg transition-colors hidden sm:block">
          <Settings className="w-5 h-5 text-foreground" />
        </button>

        {/* Admin Avatar */}
        <button className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 group relative">
          <span className="text-white font-bold text-sm">A</span>
          <div className="absolute right-0 top-full mt-2 hidden group-hover:block bg-white border border-border rounded-lg shadow-lg p-3 z-50">
            <p className="text-sm font-semibold text-foreground mb-2">Admin User</p>
            <p className="text-xs text-muted-foreground mb-3">admin@examflow.com</p>
          </div>
        </button>
      </div>
    </div>
  )
}
