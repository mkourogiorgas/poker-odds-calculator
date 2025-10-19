import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LoadingSkeleton from './LoadingSkeleton';

describe('LoadingSkeleton Component', () => {
  it('renders with default props', () => {
    render(<LoadingSkeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveAttribute('aria-label', 'Loading');
  });

  it('renders with custom props (width, height, rounded)', () => {
    render(<LoadingSkeleton width="w-32" height="h-8" rounded="rounded-full" />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('w-32', 'h-8', 'rounded-full');
  });

  it('has animate-pulse class for animation', () => {
    render(<LoadingSkeleton />);
    const skeleton = screen.getByRole('status');
    expect(skeleton).toHaveClass('animate-pulse');
  });
});
