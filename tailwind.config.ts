import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: '#faf7f2',
				foreground: '#3c2e26',
				primary: {
					DEFAULT: '#8b6914',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#a0845c',
					foreground: '#ffffff'
				},
				// New beige and brown theme colors
				'warm-beige': {
					50: '#fefcf8',
					100: '#fdf8ee',
					200: '#faf0d6',
					300: '#f6e4b8',
					400: '#f0d494',
					500: '#e8c16e',
					600: '#d9a944',
					700: '#b8893a',
					800: '#976e35',
					900: '#7a5931'
				},
				'coffee-brown': {
					50: '#f9f6f3',
					100: '#f0e9e0',
					200: '#e2d2c0',
					300: '#d0b396',
					400: '#bc916b',
					500: '#a0845c',
					600: '#8b6914',
					700: '#73511e',
					800: '#5e441e',
					900: '#4d391d'
				},
				'cream': {
					50: '#fffef8',
					100: '#fffcf0',
					200: '#fef8de',
					300: '#fcf1c7',
					400: '#f9e7a3',
					500: '#f5d975',
					600: '#efc73e',
					700: '#d4a91f',
					800: '#b08318',
					900: '#8f6a1a'
				},
				'earth-brown': {
					50: '#f7f4f1',
					100: '#ebe4dc',
					200: '#d8c7b9',
					300: '#c2a491',
					400: '#a8826b',
					500: '#946752',
					600: '#7e5545',
					700: '#68453a',
					800: '#563a32',
					900: '#48322c'
				},
				// Keep existing slate colors for contrast
				slate: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundSize: {
				'size-200': '200% 200%',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'slide-in': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'slide-in': 'slide-in 0.8s ease-out',
				'shimmer': 'shimmer 2s infinite linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
