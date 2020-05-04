import React, {useState} from 'react';
import Header from './components/header/header.component';
import Questions from './components/questions/questions.component';
import Sidebar from './components/sidebar/sidebar.component';
import SearchBox from './components/search-box/search-box.component';
import Calendar from './components/calendar/calendar.component';
import faqData from'./data/faq';
import Footer from './components/footer/footer.component';



function App() {

  // console.log(faqData)
  const [faqs, setFaqs] = useState(faqData);
  const [category, setCategory] = useState('All')
  const [searchString, setSearchString] = useState('')


  const toogleFAQ = (id) => {
    setFaqs(faqs.map((faq) => {
      if (faq.id === id) {
        faq.open = !faq.open
      } 
      else {
        faq.open = false;
      }
      return faq

    }))
  }


  const changeCategory = (category) => {
      setCategory(category)
  }


  const searchField = (e) => {
    setSearchString(e.target.value)
  }

  // console.log(searchString)

  const selectedCategory = faqs.filter(element => {
        
    return category!='All'? element.category == category : element.category})

  const filtredFAQ = selectedCategory.filter(element => 

    element.question.toLowerCase().includes(searchString.toLowerCase()));

  
    // console.log(filtredFAQ)


  





  return (
    <div className="App">
      <Header/>
      <SearchBox 
        placeholder='Search...'
        searchField={searchField}/>
      <div className='flex'>
      <Sidebar category = {faqs} changeCategory={changeCategory} selected={category}/>
      <Questions faqs = {filtredFAQ} toogleFAQ={toogleFAQ} />
      <Footer/>
      
      </div>
      
      
    </div>
  );
}

export default App;
