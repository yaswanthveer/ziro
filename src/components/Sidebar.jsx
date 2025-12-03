import React from 'react';
import {
    LayoutDashboard,
    BookOpen,
    Zap,
    Briefcase,
    Code,
    Presentation,
    Mic,
    Brain,
    Video,
    Users,
    Settings,
    LogOut
} from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: BookOpen, label: 'Subjects Mastery' },
        { icon: Zap, label: 'Exam Boost' },
        { icon: Briefcase, label: 'Career Ready' },
        { icon: Code, label: 'Mini Projects' },
        { icon: Presentation, label: 'PPT Library' },
        { icon: Mic, label: 'Interview Kit' },
        { icon: Brain, label: 'Motivation' },
        { icon: Video, label: 'Workshops' },
        { icon: Users, label: 'Community' },
    ];

    return (
        <aside className="sidebar glass-panel">
            <div className="logo-container">
                <h1 className="logo-text">Ziro<span className="dot">.</span></h1>
            </div>

            <nav className="nav-menu">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`nav-item ${item.active ? 'active' : ''}`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </div>
                ))}
            </nav>

            <div className="sidebar-footer">
                <div className="nav-item">
                    <Settings size={20} />
                    <span>Settings</span>
                </div>
                <div className="nav-item logout">
                    <LogOut size={20} />
                    <span>Logout</span>
                </div>
            </div>

            <style>{`
        .sidebar {
          width: 260px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          display: flex;
          flex-direction: column;
          padding: 24px;
          z-index: 100;
        }

        .logo-container {
          margin-bottom: 40px;
          padding: 0 12px;
        }

        .logo-text {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -1px;
        }

        .dot {
          color: var(--accent-blue);
        }

        .nav-menu {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          overflow-y: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
        }

        .nav-item.active {
          background: var(--accent-blue);
          color: white;
        }

        .sidebar-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .logout {
          color: var(--accent-red);
        }
        .logout:hover {
          background: rgba(255, 69, 58, 0.1);
          color: var(--accent-red);
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;
