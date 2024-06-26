// pages/faqs.js
import faqs from '../data/faqs';
import FAQItem from '../components/FAQItem';
import Image from 'next/image';

const FAQPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <div><Image src={require('../../../../../../public/FAQtitle.png')} alt="img" className='p-4' /></div>
      <div className="flex flex-col px-8 border-t border-orange-950 mb-8"></div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
