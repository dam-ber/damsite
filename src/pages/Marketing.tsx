import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, ArrowRight } from 'lucide-react';

function Marketing() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center">
              <img src="/beaver.svg" alt="Beaver logo" className="w-6 h-6" />
            </div>
            <span className="text-2xl font-medium">dam</span>
          </div>
          <Link to="/login" className="btn-primary">
            sign in
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              secure data access management
              <br />
              <span className="text-primary-500">made simple</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-12">
              streamline your organization's data access with intelligent request handling,
              automated compliance, and natural language processing.
            </p>
            <div className="flex space-x-4">
              <Link to="/login" className="btn-primary inline-flex items-center px-8">
                get started <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Data center" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">natural language processing</h3>
              <p className="text-[var(--text-secondary)]">
                request data access using plain english. our ai understands your needs
                and matches you with the right datasets.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">automated compliance</h3>
              <p className="text-[var(--text-secondary)]">
                stay compliant with automatic policy enforcement, audit trails,
                and real-time monitoring of data access.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">granular access control</h3>
              <p className="text-[var(--text-secondary)]">
                set precise permissions with time-based access, role-based controls,
                and automated request workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-[var(--text-secondary)]">
          <a href="mailto:hello@trydam.io" className="hover:text-primary-500 transition-colors">
            hello@trydam.io
          </a>
          <p className="mt-2">© 2024 dam. all rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Marketing;