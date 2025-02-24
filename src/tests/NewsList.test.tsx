import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewsList from '../components/NewsList';

describe('NewsList Component', () => {
  it('renders without crashing', () => {
    render(<NewsList articles={[]} />);
  });

  it('displays "No news found" when there are no articles', () => {
    render(<NewsList articles={[]} />);
    expect(screen.getByText('No news found.')).toBeInTheDocument();
  });

  it('renders news articles correctly', () => {
    const mockArticles = [
      {
        title: 'Test Article 1',
        description: 'Description of test article 1',
        url: 'https://example.com/article1',
        urlToImage: 'https://example.com/image1.jpg',
      },
      {
        title: 'Test Article 2',
        description: 'Description of test article 2',
        url: 'https://example.com/article2',
        urlToImage: '',
      },
    ];

    render(<NewsList articles={mockArticles} />);

    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(
      screen.getByText('Description of test article 1')
    ).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
    expect(
      screen.getByText('Description of test article 2')
    ).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(1);
    expect(images[0]).toHaveAttribute('src', 'https://example.com/image1.jpg');

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(2);
    expect(links[0]).toHaveAttribute('href', 'https://example.com/article1');
    expect(links[1]).toHaveAttribute('href', 'https://example.com/article2');
  });
});
