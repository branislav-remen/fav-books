import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookCard } from './book-card';
import type { Book } from '../../store/interfaces';

// Mock the CardModal component
vi.mock('./card-modal', () => ({
  CardModal: ({ open, onClose, book }: { open: boolean; onClose: () => void; book: Book }) => (
    <div data-testid="card-modal" data-open={open}>
      <button onClick={onClose}>Close Modal</button>
      <div>{book.title}</div>
    </div>
  ),
}));

const mockBook: Book = {
  id: '1',
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  description: 'A classic American novel set in the Jazz Age',
  image: 'https://example.com/gatsby.jpg',
};

describe('BookCard', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render book title and author', () => {
    render(<BookCard {...mockBook} />);
    expect(screen.getByText(/The Great Gatsby.*F. Scott Fitzgerald/i)).toBeInTheDocument();
  });

  it('should render book image with correct src and alt', () => {
    render(<BookCard {...mockBook} />);
    const img = screen.getByAltText('The Great Gatsby') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://example.com/gatsby.jpg');
  });

  it('should have card with cursor pointer style', () => {
    render(<BookCard {...mockBook} />);
    const card = screen.getByText(/The Great Gatsby.*F. Scott Fitzgerald/i).closest('.MuiCard-root');
    expect(card).toBeInTheDocument();
  });

  it('should open modal when card is clicked', async () => {
    const user = userEvent.setup();
    render(<BookCard {...mockBook} />);

    // Initially modal should be closed
    const modal = screen.getByTestId('card-modal');
    expect(modal).toHaveAttribute('data-open', 'false');

    // Click on the card - use container to find the card element
    const card = screen.getByText(/The Great Gatsby.*F. Scott Fitzgerald/i).closest('.MuiCard-root') as HTMLElement;
    await user.click(card);

    // Modal should now be open
    await waitFor(() => {
      expect(modal).toHaveAttribute('data-open', 'true');
    });
  });

  it('should close modal when close is triggered', async () => {
    const user = userEvent.setup();
    render(<BookCard {...mockBook} />);

    // Open modal
    const card = screen.getByText(/The Great Gatsby.*F. Scott Fitzgerald/i).closest('.MuiCard-root') as HTMLElement;
    await user.click(card);

    const modal = screen.getByTestId('card-modal');
    await waitFor(() => {
      expect(modal).toHaveAttribute('data-open', 'true');
    });

    // Close modal
    const closeButton = screen.getByText('Close Modal');
    await user.click(closeButton);

    await waitFor(() => {
      expect(modal).toHaveAttribute('data-open', 'false');
    });
  });

  it('should use fallback image when image fails to load', async () => {
    render(<BookCard {...mockBook} />);
    const img = screen.getByAltText('The Great Gatsby') as HTMLImageElement;

    // Simulate image error using fireEvent (handles act internally)
    fireEvent.error(img);

    await waitFor(() => {
      expect(img.src).toContain('placehold.co');
    });
  });

  it('should pass correct book data to modal', () => {
    render(<BookCard {...mockBook} />);
    const modal = screen.getByTestId('card-modal');
    expect(modal).toBeInTheDocument();
    expect(screen.getByText('The Great Gatsby')).toBeInTheDocument();
  });

  it('should render CardMedia with correct dimensions', () => {
    render(<BookCard {...mockBook} />);
    const img = screen.getByAltText('The Great Gatsby') as HTMLImageElement;
    expect(img).toHaveAttribute('height', '250');
    expect(img).toHaveAttribute('width', '150');
  });
});
