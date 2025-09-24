import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { describe, expect, it } from 'vitest';

describe('Hero', () => {
  it('renders hero section with correct content', () => {
    render(<Hero />);

    // Check for main heading
    expect(screen.getByText('Your Mental Health Matters')).toBeInTheDocument();
    
    // Check for subheading
    expect(screen.getByText(/Professional counseling and therapy services/)).toBeInTheDocument();
    
    // Check for CTA buttons
    expect(screen.getByText('Get Support Today')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('renders hero image with correct attributes', () => {
    render(<Hero />);

    const heroImage = screen.getByAltText('Mental health support illustration');
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('width', '120');
    expect(heroImage).toHaveAttribute('height', '120');
  });

  it('has correct link destinations', () => {
    render(<Hero />);

    const supportLink = screen.getByRole('link', { name: 'Get Support Today' });
    const learnMoreLink = screen.getByRole('link', { name: 'Learn More' });

    expect(supportLink).toHaveAttribute('href', '/services');
    expect(learnMoreLink).toHaveAttribute('href', '/about');
  });

  it('applies correct CSS classes for styling', () => {
    const { container } = render(<Hero />);

    // Check for section element with correct classes
    const section = container.querySelector('section');
    expect(section).toHaveClass('relative', 'min-h-screen', 'flex', 'items-center');
  });

  it('has proper semantic structure', () => {
    render(<Hero />);

    // Check for proper heading hierarchy
    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toHaveTextContent('Your Mental Health Matters');

    // Check for section landmark
    const section = screen.getByRole('banner');
    expect(section).toBeInTheDocument();
  });

  it('renders background decorative elements', () => {
    const { container } = render(<Hero />);

    // Check for background gradient elements
    const gradientElements = container.querySelectorAll('.absolute');
    expect(gradientElements.length).toBeGreaterThan(0);
  });
});