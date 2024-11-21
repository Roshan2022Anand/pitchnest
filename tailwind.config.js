/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgColor: 'var(--bg-color)',
        textColor: 'var(--text-color)',
        secColor: 'var(--secondary-color)',
        accentColor: 'var(--accent-color)',
      },
      fontFamily: {
        interFont: 'var(--font-inter)',
        robotoFont: 'var(--font-roboto)',
        poppinsFont: 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
};
