import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import QuestionnaireModal from './components/QuestionnaireModal';
import PageTitle from './components/PageTitle';
import MetaTags from './components/MetaTags';
import { Toaster } from './components/ui/toaster';

function App() {
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);

  useEffect(() => {
    const handleOpenQuestionnaire = () => {
      setQuestionnaireOpen(true);
    };

    window.addEventListener('openQuestionnaire', handleOpenQuestionnaire);
    return () => window.removeEventListener('openQuestionnaire', handleOpenQuestionnaire);
  }, []);

  return (
    <Router>
      <PageTitle />
      <MetaTags />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <QuestionnaireModal open={questionnaireOpen} onOpenChange={setQuestionnaireOpen} />
      <Toaster />
    </Router>
  );
}

export default App;
