import React from 'react';
import { render, screen } from '@testing-library/react';
import LazySection from '../LazySection';
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});

// Store the original IntersectionObserver
const originalIntersectionObserver = global.IntersectionObserver;

beforeAll(() => {
  global.IntersectionObserver = mockIntersectionObserver;
});

afterAll(() => {
  global.IntersectionObserver = originalIntersectionObserver;
});

describe('LazySection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders fallback initially', () => {
    render(
      <LazySection>
        <div>Lazy content</div>
      </LazySection>
    );

    // Should show default fallback (loading skeleton)
    expect(screen.queryByText('Lazy content')).not.toBeInTheDocument();
    expect(document.querySelector('.animate-pulse')).toBeInTheDocument();
  });

  it('renders custom fallback when provided', () => {
    const customFallback = <div>Custom loading...</div>;

    render(
      <LazySection fallback={customFallback}>
        <div>Lazy content</div>
      </LazySection>
    );

    expect(screen.getByText('Custom loading...')).toBeInTheDocument();
    expect(screen.queryByText('Lazy content')).not.toBeInTheDocument();
  });

  it('creates IntersectionObserver with correct options', () => {
    render(
      <LazySection rootMargin="100px" threshold={0.5}>
        <div>Lazy content</div>
      </LazySection>
    );

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        rootMargin: '100px',
        threshold: 0.5,
      }
    );
  });

  it('uses default options when not provided', () => {
    render(
      <LazySection>
        <div>Lazy content</div>
      </LazySection>
    );

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );
  });

  it('applies custom className', () => {
    const { container } = render(
      <LazySection className="custom-class">
        <div>Lazy content</div>
      </LazySection>
    );

    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('observes the element when mounted', () => {
    const mockObserve = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: mockObserve,
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    });

    render(
      <LazySection>
        <div>Lazy content</div>
      </LazySection>
    );

    expect(mockObserve).toHaveBeenCalledWith(expect.any(Element));
  });

  it('disconnects observer on unmount', () => {
    const mockDisconnect = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: mockDisconnect,
    });

    const { unmount } = render(
      <LazySection>
        <div>Lazy content</div>
      </LazySection>
    );

    unmount();

    expect(mockDisconnect).toHaveBeenCalled();
  });
});