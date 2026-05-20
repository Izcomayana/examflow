'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Zap, BookOpen, Building2, Calendar, AlertTriangle, LogOut, X } from 'lucide-react'
import { useSidebar } from '@/contexts/sidebar-context'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: BookOpen, label: 'Courses', href: '/dashboard/courses' },
  { icon: Building2, label: 'Halls & Venues', href: '/dashboard/halls' },
  { icon: Zap, label: 'Generator', href: '/dashboard/generator' },
  { icon: Calendar, label: 'Timetables', href: '/dashboard/timetables' },
  { icon: AlertTriangle, label: 'Conflicts', href: '/dashboard/conflicts' },
]

export function Sidebar() {
  const pathname = usePathname()
  const { isCollapsed, toggleSidebar } = useSidebar()

  return (
    <>
      {/* Mobile Overlay Backdrop - Only show on mobile when sidebar is open */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-r border-slate-800 flex flex-col fixed h-screen left-0 top-0 z-40 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'
        } -translate-x-full lg:translate-x-0 ${!isCollapsed && 'translate-x-0'}`}>
        {/* Logo Section */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <Link href="/" className={`flex items-center gap-3 ${isCollapsed ? 'justify-center w-full' : ''}`}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            {!isCollapsed && (
              <div>
                <p className="font-bold text-white text-lg">ExamFlow</p>
                <p className="text-xs text-slate-400">v1.0</p>
              </div>
            )}
          </Link>
          {/* Close button - shows on mobile, and on lg when not collapsed */}
          {!isCollapsed && (
            <button
              onClick={toggleSidebar}
              className="p-1 hover:bg-slate-700 rounded transition-colors"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <X className="w-4 h-4 text-slate-400" />
            </button>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 group ${isCollapsed ? 'justify-center px-0' : ''
                  } ${isActive
                    ? 'bg-gradient-to-r from-primary/30 to-accent/20 text-primary shadow-lg shadow-primary/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                title={isCollapsed ? item.label : ''}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                {!isCollapsed && (
                  <>
                    <span className="font-medium text-sm">{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Settings & Profile */}
        <div className={`p-4 border-t border-slate-800 space-y-2 ${isCollapsed ? 'flex flex-col items-center' : ''}`}>
          <button className="w-full flex items-center gap-2 px-3 py-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg transition-colors text-slate-300 hover:text-white text-xs font-medium">
            <LogOut className="w-4 h-4" />
            Logout
          </button>

          {isCollapsed && (
            <button className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 hover:shadow-lg transition-all" title="Admin">
              <span className="text-white font-bold text-sm">A</span>
            </button>
          )}
        </div>
      </div>
    </>
  )
}
