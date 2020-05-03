import React, {Fragment} from 'react';
import './questions.style.scss';
// import { Fragment } from 'react';

const Questions = (props) => {

    // console.log(props)

    const {faqs, toogleFAQ} = props;

    // let selectedCategory = faqs.filter(element => {
        
    //     return selected!='All'? element.category == selected : element.category})




    

    return (
        <div className='faqs'>
        {faqs.map((faq) => {
          return (
          <div className={`faq ${faq.open ? 'open' : '' }`} 
          key={faq.id} onClick={() => toogleFAQ(faq.id)}>
              <div className='faq-questions'>
         {faq.question}
         </div>
         {/* <div className='faq-category'><b>Category:</b> {faq.category}</div> */}
         <div key={faq.id} className='faq-answer'>
        
         {faq.answer}
       
         
         </div> 
         <div className='faq-answer'>        
        <a href={faq.url} className='faq-answer--url' key={faq.id}>Details &rarr;</a>        
        </div> 
            </div>

         
          ) 
        })}
      </div>
    )

};


export default Questions;
