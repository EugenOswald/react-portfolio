import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<div>
			<button className='language-switcher-btn' onClick={() => changeLanguage('de')}>
				DE
			</button>
			<button className='language-switcher-btn' onClick={() => changeLanguage('en')}>
				EN
			</button>
		</div>
	);
};

export default LanguageSwitcher;
