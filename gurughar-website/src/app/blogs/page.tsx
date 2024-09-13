import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import styles from '../../../styles/Blogs.module.css';

export default function Blogs() {
    return (
        <>
            <Navbar />

            {/* Main Content */}
            <main className={styles.main}>
                <h1 className={styles.heading}>Our Blogs</h1>
                <p className={styles.description}>
                    Discover articles, updates, and stories from the Sikh Society of Newfoundland, NL.
                </p>

                {/* Blog Grid Section */}
                <div className={styles.blogGrid}>

                    {/* Blog Post Card 1 */}
                    <div className={styles.blogCard}>
                        <h3>1: Community Growth</h3>
                        <p>Explore how the Sikh Society has fostered community growth and development over the past year.</p>
                        <a href="https://dynamic-mayonnaise-b3e.notion.site/Community-Growth-ba73baf9188d40ef928b0fce44d9932a" target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </div>

                    {/* Blog Post Card 2 */}
                    <div className={styles.blogCard}>
                        <h3>2: Volunteering</h3>
                        <p>Learn about the importance of volunteering within the Sikh community and how you can contribute.</p>
                        <a href="https://www.notion.so/blog-post-2" target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </div>

                    {/* Blog Post Card 3 */}
                    <div className={styles.blogCard}>
                        <h3>3: Events</h3>
                        <p>Take a look at the recent events organized by the Sikh Society, bringing the community together.</p>
                        <a href="https://www.notion.so/blog-post-3" target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </div>

                    {/* Blog Post Card 4 */}
                    <div className={styles.blogCard}>
                        <h3>4: Spiritual Reflection</h3>
                        <p>Reflect on spiritual guidance from the Guru Granth Sahib Ji and its relevance to daily life.</p>
                        <a href="https://www.notion.so/blog-post-4" target="_blank" rel="noopener noreferrer">
                            Read More
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
