import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Shield, BarChart3, Sun, Moon, Menu, X, Cog, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

function Layout() {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { to: '/app', icon: LayoutDashboard, label: 'home' },
    { to: '/app/dashboard', icon: LayoutDashboard, label: 'dashboard' },
    { to: '/app/integrations', icon: Cog, label: 'integrations' },
    { to: '/app/compliance', icon: Shield, label: 'compliance' },
    { to: '/app/analytics', icon: BarChart3, label: 'analytics' },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className={`${
        isNavExpanded ? 'w-64' : 'w-20'
      } bg-[var(--bg-secondary)] border-r border-[var(--border-color)] transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-[var(--border-color)] flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-500 rounded-xl flex items-center justify-center">
              <img src="/beaver.svg" alt="Beaver logo" className="w-5 h-5" />
            </div>
            {isNavExpanded && (
              <h1 className="text-xl font-medium">dam</h1>
            )}
          </div>
          <button 
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {isNavExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        <div className="p-4 flex-1">
          {navItems.map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center nav-link ${isActive ? 'active' : ''} mb-1`
              }
            >
              <Icon className="w-5 h-5" />
              {isNavExpanded && <span className="ml-3">{label}</span>}
            </NavLink>
          ))}
        </div>
        <div className="p-4 border-t border-[var(--border-color)]">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center nav-link mb-1"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-5 h-5" />
                {isNavExpanded && <span className="ml-3">light mode</span>}
              </>
            ) : (
              <>
                <Moon className="w-5 h-5" />
                {isNavExpanded && <span className="ml-3">dark mode</span>}
              </>
            )}
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center nav-link text-red-500 hover:text-red-600"
          >
            <LogOut className="w-5 h-5" />
            {isNavExpanded && <span className="ml-3">sign out</span>}
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;