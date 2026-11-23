import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Search, ExternalLink, LibraryBig } from 'lucide-react';
import api from '../services/api';
import { libraryCategories } from '../data/libraryCategories';
import styles from './Library.module.css';

export default function Library() {
  const [category, setCategory] = useState('All categories');
  const [subcategory, setSubcategory] = useState('All topics');
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.get('/library/books')
      .then(({ data }) => setBooks(data.books || []))
      .catch(() => setError('The library catalogue could not be reached right now. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  const activeCategory = libraryCategories.find(item => item.name === category);
  const topics = activeCategory?.subcategories || [];
  const visibleBooks = useMemo(() => books.filter(book => {
    const matchesCategory = category === 'All categories' || book.category === category;
    const matchesSubcategory = subcategory === 'All topics' || book.subcategory === subcategory;
    const haystack = `${book.title} ${book.author || ''} ${book.description || ''} ${book.category} ${book.subcategory}`.toLowerCase();
    return matchesCategory && matchesSubcategory && haystack.includes(query.toLowerCase());
  }), [books, category, subcategory, query]);

  function chooseCategory(value) {
    setCategory(value);
    setSubcategory('All topics');
  }

  return <section className={styles.page}>
    <div className={styles.hero}>
      <span className={styles.kicker}>READ · LEARN · GROW</span>
      <h1>The Upper Room <em>Library</em></h1>
      <p>A growing learning resource for spiritual formation, practical development, leadership and the transformation of society. Explore our catalogue by subject area and topic.</p>
      <div className={styles.search}><Search size={18}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search titles, authors or topics..." aria-label="Search library"/></div>
      <div className={styles.heroMeta}><span><LibraryBig size={16}/> 12 subject categories</span><span><BookOpen size={16}/> Curated learning resources</span></div>
    </div>

    <div className={styles.catalogue}>
      <aside className={styles.sidebar}>
        <h2>Browse subjects</h2>
        <button className={category === 'All categories' ? styles.selected : ''} onClick={()=>chooseCategory('All categories')}>All categories</button>
        {libraryCategories.map((item, i)=><button key={item.name} className={category === item.name ? styles.selected : ''} onClick={()=>chooseCategory(item.name)}><span>{String(i+1).padStart(2,'0')}</span>{item.name}</button>)}
      </aside>
      <div className={styles.results}>
        <div className={styles.resultHead}>
          <div><span className={styles.kicker}>THE READING COLLECTION</span><h2>{category === 'All categories' ? 'Explore the library' : category}</h2></div>
          <span className={styles.count}>{visibleBooks.length} {visibleBooks.length === 1 ? 'resource' : 'resources'}</span>
        </div>
        {activeCategory && <div className={styles.topics}><button className={subcategory === 'All topics' ? styles.topicActive : ''} onClick={()=>setSubcategory('All topics')}>All topics</button>{topics.map(topic=><button key={topic} className={subcategory === topic ? styles.topicActive : ''} onClick={()=>setSubcategory(topic)}>{topic}</button>)}</div>}
        {error && <p className={styles.notice}>{error}</p>}
        {loading ? <div className={styles.empty}>Loading the library catalogue…</div> :
          visibleBooks.length ? <div className={styles.bookGrid}>{visibleBooks.map(book=><article className={styles.book} key={book._id}><div className={styles.bookCover}>{book.coverImage ? <img src={book.coverImage} alt=""/> : <BookOpen size={34}/>}</div><div className={styles.bookInfo}><span>{book.category}</span><h3>{book.title}</h3><p>{book.author || 'Author details to be provided'}</p><small>{book.subcategory}</small>{book.description&&<p className={styles.description}>{book.description}</p>}<a href={book.fileUrl} target="_blank" rel="noreferrer">Read / access resource <ExternalLink size={14}/></a></div></article>)}</div>
          : <div className={styles.empty}><BookOpen size={30}/><h3>{query || category !== 'All categories' || subcategory !== 'All topics' ? 'No matching books yet' : 'The library is being populated'}</h3><p>Our subject areas are ready. Book titles and reading files will appear here as the Upper Room team adds approved resources to the catalogue.</p><span>Check back as the collection grows.</span></div>}
      </div>
    </div>
  </section>;
}
