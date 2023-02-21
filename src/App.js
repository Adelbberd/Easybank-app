import Header from './components/Header';
import HomeSection from './components/HomeSection';
import MainSection from './components/MainSection';
import ArticleSection from './components/ArticleSection';
import Footer from './components/Footer';
import React from 'react';

function App() {
	return (
		<div className="App">
			<Header />
			<HomeSection />
			<MainSection />
			<ArticleSection />
			<Footer />
		</div>
	);
}

export default App;
