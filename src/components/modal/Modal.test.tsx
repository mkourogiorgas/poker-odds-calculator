import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Modal from './Modal';

describe('Modal Component', () => {
  it('does not render when isOpen is false', () => {
    render(<Modal isOpen={false} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders when isOpen is true', () => {
    render(<Modal isOpen={true} />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('has proper ARIA', () => {
    render(<Modal isOpen={true} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-live', 'polite');
    expect(dialog).toHaveAttribute('aria-busy', 'true');
  });

  it('displays loading message', () => {
    render(<Modal isOpen={true} />);
    expect(screen.getByText(/Calculating odds/i)).toBeInTheDocument();
    expect(screen.getByText(/8,000,000 computations/i)).toBeInTheDocument();
  });

  it('focuses modal when opened', () => {
    render(<Modal isOpen={true} />);
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveFocus();
  });

  it('check if navigates outside modal', () => {
    render(<Modal isOpen={true} />);
    const keydownEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    const preventDefaultSpy = vi.spyOn(keydownEvent, 'preventDefault');
    document.dispatchEvent(keydownEvent);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
