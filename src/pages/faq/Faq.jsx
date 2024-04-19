import { useState } from 'react'

// Components
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import SearchBar from '../../components/search-bar/SearchBar';
import FaqComponent from '../../components/faq-component/FaqComponent'

// Constants
import faqs from '../../constants/faqs'

// Style
import './faq.css'

const Faq = () => {
    // Monitor index of opened faq
    const [activeIndex, setActiveIndex] = useState(null)

    function handleToggle(index) {
        if (activeIndex === index) {
            // Close all opened faqs
            setActiveIndex(null);
        } else {
            // Open clicked faq
            setActiveIndex(index);
        }
    }

    return (
        <main>
            <Breadcrumb page={'faq'}/>
            <SearchBar />
            <header>
                <h2>Frequently asked questions</h2>
            </header>
            <div className='faq-container'>
                {
                    faqs.map((faq, index) => {
                        return <FaqComponent
                            key={faq.id}
                            faq={faq}
                            isActive={activeIndex === index}
                            onClick={() => handleToggle(index)} />
                    })
                }
            </div>
        </main>
    );
}

export default Faq;