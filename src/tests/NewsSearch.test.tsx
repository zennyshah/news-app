import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsSearch from '../components/NewsSearch';

describe('NewsSearch Component', () => {
  it('renders correctly', () => {
    render(<NewsSearch onSearch={jest.fn()} />);
    expect(
      screen.getByPlaceholderText('Search for news...')
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('updates input value when typed into', () => {
    render(<NewsSearch onSearch={jest.fn()} />);
    const input = screen.getByPlaceholderText('Search for news...');

    fireEvent.change(input, { target: { value: 'Breaking News' } });
    expect(input).toHaveValue('Breaking News');
  });

  it('calls onSearch with the correct query when search button is clicked', () => {
    const mockOnSearch = jest.fn();
    render(<NewsSearch onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText('Search for news...');
    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.change(input, { target: { value: 'Technology' } });
    fireEvent.click(button);

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith('Technology');
  });

  it('does not call onSearch when search button is clicked with an empty query', () => {
    const mockOnSearch = jest.fn();
    render(<NewsSearch onSearch={mockOnSearch} />);

    const button = screen.getByRole('button', { name: /search/i });

    fireEvent.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});
