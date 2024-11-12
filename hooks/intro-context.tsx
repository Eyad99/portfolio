'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const IntroContext = createContext({
	introFinished: false,
	setIntroFinished: (value: boolean) => {},
});

export const IntroProvider = ({ children }: { children: ReactNode }) => {
	const [introFinished, setIntroFinished] = useState(false);
	return <IntroContext.Provider value={{ introFinished, setIntroFinished }}>{children}</IntroContext.Provider>;
};

export const useIntro = () => useContext(IntroContext);
