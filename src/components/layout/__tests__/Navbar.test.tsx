import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import { describe, it } from 'node:test';
import { expect } from 'vitest';

// Mock next/link
import { vi } from 'vitest';

const MockLink = ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => {
  return <a href={href} {...props}>{children}</a>;
};
MockLink.displayName = 'MockLink';

vi.mock('next/link', () => ({
  default: MockLink
}));

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />);

    // Check for logo
    expect(screen.getByAltText('Mella Logo')).toBeInTheDocument();

    // Check for navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct navigation structure and accessibility attributes', () => {
    render(<Navbar />);

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'Main navigation');
    expect(nav).toHaveAttribute('id', 'navigation');
  });

  it('renders mobile menu button with correct accessibility attributes', () => {
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    
    // Initially closed
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Click to open
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders CTA button with correct link', () => {
    render(<Navbar />);

    const ctaButtons = screen.getAllByText('Get Support Today');
    expect(ctaButtons.length).toBeGreaterThan(0);
    
    // Check desktop CTA button
    const desktopCTA = ctaButtons.find(button => 
      button.closest('a')?.getAttribute('href') === '/services'
    );
    expect(desktopCTA).toBeInTheDocument();
  });

  it('has correct link destinations', () => {
    render(<Navbar />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '/services');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });

  it('applies scroll-based styling classes', () => {
    const { container } = render(<Navbar />);

    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50');
  });

  it('renders mobile menu with correct accessibility attributes', () => {
    render(<Navbar />);

    // Mobile menu should have correct attributes
    const mobileMenu = document.querySelector('#mobile-menu');
    expect(mobileMenu).toHaveAttribute('role', 'menu');
    expect(mobileMenu).toHaveAttribute('aria-labelledby', 'mobile-menu-button');
  });

  it('contains all required navigation items in mobile menu', () => {
    render(<Navbar />);

    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: /toggle mobile menu/i });
    fireEvent.click(menuButton);

    // Check that mobile menu contains all navigation links
    const mobileLinks = screen.getAllByRole('link');
    const linkTexts = mobileLinks.map(link => link.textContent);
    
    expect(linkTexts).toContain('Home');
    expect(linkTexts).toContain('About');
    expect(linkTexts).toContain('Services');
    expect(linkTexts).toContain('Contact');
  });
});