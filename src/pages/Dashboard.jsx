import React from 'react';
import {
    BookOpen,
    Zap,
    Briefcase,
    Code,
    Presentation,
    Mic,
    Brain,
    Video,
    Users,
    ArrowRight
} from 'lucide-react';

const Dashboard = () => {
    const modules = [
        {
            title: 'Subjects Mastery',
            desc: 'Deep dive into core subjects with real-world context.',
            icon: BookOpen,
            color: 'var(--accent-blue)',
            stats: '4 Subjects'
        },
        {
            title: 'Exam Boost',
            desc: 'Crash plans, blueprints, and auto-generated tests.',
            icon: Zap,
            color: 'var(--accent-gold)',
            stats: 'Pass Rate +40%'
        },
        {
            title: 'Career Ready',
            desc: 'Roadmaps, certifications, and internship guidance.',
            icon: Briefcase,
            color: 'var(--accent-purple)',
            stats: 'Job Roles'
        },
        {
            title: 'Mini Projects',
            desc: 'Beginner to intermediate projects with source code.',
            icon: Code,
            color: 'var(--accent-green)',
            stats: '10+ Projects'
        },
        {
            title: 'PPT Library',
            desc: 'Ready-made presentations for seminars and vivas.',
            icon: Presentation,
            color: '#ff9f0a',
            stats: '20+ Slides'
        },
        {
            title: 'Interview Kit',
            desc: 'HR questions, resume building, and mock tests.',
            icon: Mic,
            color: '#ff375f',
            stats: 'Placement Ready'
        },
        {
            title: 'Motivation',
            desc: 'Study strategies and confidence boosting.',
            icon: Brain,
            color: '#bf5af2',
            stats: 'Mindset'
        },
        {
            title: 'Workshops',
            desc: 'Live sessions on trending tech and exam prep.',
            icon: Video,
            color: '#64d2ff',
            stats: 'Live Access'
        },
        {
            title: 'Community',
            desc: 'Connect with peers, share notes, and get help.',
            icon: Users,
            color: '#30d158',
            stats: 'Active Now'
        }
    ];

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <div>
                    <h1>Welcome back, Student</h1>
                    <p>Your premium learning journey continues here.</p>
                </div>
                <div className="header-actions">
                    <button className="btn-primary">Resume Learning</button>
                </div>
            </header>

            <div className="grid-dashboard">
                {modules.map((mod, index) => (
                    <div key={index} className="glass-card module-card">
                        <div className="card-icon" style={{ backgroundColor: mod.color }}>
                            <mod.icon size={24} color="white" />
                        </div>
                        <div className="card-content">
                            <h3>{mod.title}</h3>
                            <p>{mod.desc}</p>
                        </div>
                        <div className="card-footer">
                            <span className="stats-badge">{mod.stats}</span>
                            <button className="icon-btn">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .dashboard-page {
          padding: 40px;
          padding-left: 300px; /* Sidebar width + padding */
          min-height: 100vh;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .module-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          height: 100%;
          cursor: pointer;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .card-content h3 {
          margin-bottom: 8px;
          font-size: 1.25rem;
        }

        .card-content p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .card-footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .stats-badge {
          font-size: 0.8rem;
          padding: 4px 12px;
          background: rgba(255,255,255,0.1);
          border-radius: 20px;
          color: var(--text-secondary);
        }

        .icon-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          transition: color 0.2s;
        }

        .icon-btn:hover {
          color: var(--text-primary);
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
