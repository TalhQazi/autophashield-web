import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Science from './pages/Science'
import Ingredients from './pages/Ingredients'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'

function NavItem({ to, children }: { to: string; children: React.ReactNode }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				`px-2 sm:px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
					isActive 
						? 'text-white bg-brand-orange shadow-md' 
						: 'text-gray-700 hover:text-brand-orange hover:bg-gray-50'
				}`
			}
		>
			{children}
		</NavLink>
	)
}

function ScrollToTop() {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
	}, [location.pathname])

	return null
}

function Navbar() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-muted/15 backdrop-blur-md border-b border-gray-200 shadow-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-center h-14 sm:h-20 md:h-24">
					{/* Centered logo */}
					<Link
						to="/"
						className="flex items-center justify-center hover:opacity-80 transition-opacity"
					>
						<img
							src="/images/new-logo.png"
							alt="AutophaShield Logo"
							className="h-14 w-16 sm:h-20 sm:w-22 md:h-24 md:w-26 object-contain rounded-lg"
							onError={(e) => {
								const target = e.target as HTMLImageElement;
								target.style.display = 'none';
							}}
						/>
					</Link>

					{/* Nav links aligned to the right */}
					<nav className="absolute right-0 inset-y-0 flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
						<NavItem to="/ingredients">Product</NavItem>
						<NavItem to="/science">Science</NavItem>
						<NavItem to="/contact">Contact</NavItem>
					</nav>
				</div>
			</div>
		</header>
	)
}

function Footer() {
	return (
		<footer className="mt-12 sm:mt-20 border-t bg-white">
			<div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 text-xs sm:text-sm text-gray-600 space-y-2">
				<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
					<span>P.O. Box 52, Detroit, ME 04929</span>
					<span className="hidden sm:inline">•</span>
					<span>(207) 947-1999</span>
				</div>
				<div>
					<a href="mailto:nathan@membershipauto.com" className="underline hover:text-brand-orange transition-colors">nathan@membershipauto.com</a>
				</div>
				<div className="text-gray-500 text-xs">© 2025 AutophaShield™ • Trademarked and patent-pending. Formulated in the United States.</div>
			</div>
		</footer>
	)
}

function Placeholder({ title }: { title: string }) {
	return (
		<main className="mx-auto max-w-6xl px-4 py-16">
			<h1 className="text-3xl font-bold text-brand-green">{title}</h1>
			<p className="mt-4 text-gray-700">Content coming next.</p>
		</main>
	)
}

export default function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/science" element={<Science />} />
				<Route path="/ingredients" element={<Ingredients />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/thank-you" element={<ThankYou />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}


