import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Error from './Error';

describe('Error Component', () => {
  it('displays error message', () => {
    render(<Error errorMessage="Test error message" />);
    expect(screen.getByText(/Test error message/i)).toBeInTheDocument();
  });

  it('calls onDismiss when close button clicked', () => {
    const mockDismiss = vi.fn();
    render(<Error errorMessage="Test error" onDismiss={mockDismiss} />);

    const closeButton = screen.getByLabelText('Dismiss error');
    fireEvent.click(closeButton);

    expect(mockDismiss).toHaveBeenCalledTimes(1);
  });

  it('calls onDismiss when Escape key pressed', () => {
    const mockDismiss = vi.fn();
    render(<Error errorMessage="Test error" onDismiss={mockDismiss} />);

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(mockDismiss).toHaveBeenCalledTimes(1);
  });

  it('has proper ARIA attributes for screen readers', () => {
    render(<Error errorMessage="Test error" />);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveAttribute('aria-live', 'assertive');
    expect(alert).toHaveAttribute('aria-atomic', 'true');
  });

  it('does not show dismiss button when onDismiss not provided', () => {
    render(<Error errorMessage="Test error" />);
    expect(screen.queryByLabelText('Dismiss error')).not.toBeInTheDocument();
  });
});
