import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import Features from './components/Features';
import PriceTable from './components/PriceTable';
import Faq from './components/Faq';
import Customers from './components/Customers';
import Numbers from './components/Numbers';
import Newsletter from './components/Newsletter';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Numbers />
            <Features />
            <Customers />
            <Section />
            <PriceTable />
            <Faq />
            <Newsletter />
            <Footer/>
        </>
    );
}

export default App;
