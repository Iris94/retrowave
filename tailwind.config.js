/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
			colors: {
				'primary-dark': '#3F2A56',
				'primary-accent': '#E0457B',
				'secondary-warm': '#ED9B33',
				'secondary-cool': '#5461C8',
				'tertiary-light': '#7A93DC',
				'tertiary-dark': '#051C2C',
				'dark-shade': '#341658',
				'light-shade': '#592c84',
				'car-dark': '#0a0813',
				'car-dash': '#1c1d39',
				'darker-neon': '#102932;',
				'dark-neon': '#498099',
				'light-neon': '#30C0B7',
				'hover-neon': '#3cf1e5',
			}
		},
  },
  plugins: [],
}

