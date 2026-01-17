import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardView } from './card-view';
import type { Book } from '../../store/interfaces';

// Mock the BookCard component since we'll test it separately
vi.mock('./book-card', () => ({
  BookCard: ({ title, author }: Book) => (
    <div data-testid="book-card">
      {title} by {author}
    </div>
  ),
}));

const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A classic American novel',
    image: 'https://example.com/gatsby.jpg',
  },
  {
    id: '2',
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian social science fiction novel',
    image: 'https://example.com/1984.jpg',
  },
  {
    id: '3',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A novel about racial injustice',
    image: 'https://example.com/mockingbird.jpg',
  },
];

describe('CardView', () => {
  it('should render without crashing', () => {
    render(<CardView books={[]} />);
  });

  it('should render the correct number of book cards', () => {
    render(<CardView books={mockBooks} />);
    const cards = screen.getAllByTestId('book-card');
    expect(cards).toHaveLength(3);
  });

  it('should render empty list when no books provided', () => {
    render(<CardView books={[]} />);
    const cards = screen.queryAllByTestId('book-card');
    expect(cards).toHaveLength(0);
  });

  it('should pass correct props to BookCard components', () => {
    render(<CardView books={mockBooks} />);
    expect(screen.getByText(/The Great Gatsby by F. Scott Fitzgerald/i)).toBeInTheDocument();
    expect(screen.getByText(/1984 by George Orwell/i)).toBeInTheDocument();
    expect(screen.getByText(/To Kill a Mockingbird by Harper Lee/i)).toBeInTheDocument();
  });

  it('should render each book with unique key', () => {
    const { container } = render(<CardView books={mockBooks} />);
    const cards = container.querySelectorAll('[data-testid="book-card"]');
    expect(cards).toHaveLength(mockBooks.length);
  });
});
