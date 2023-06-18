/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius:{
      'lg':'10px',
      'sm':'5px',
      'm':'6px',
      's':'4px'
    },
    marginTop:{
      'md':'24px'
    },
    border:{
      'form-border':'1px solid #E6E6E6'
    },
    extend: {
      fontSize: {
        'custom-size': '24px',
        'info-size':'16px'
      },
      padding:{
        'custom-padding':'16px 24px',
        'form-padding':'32px',
        'input-padding':'8px 12px'
      },
      margin:{
        'custom-margin':'20px'
      },
      spacing:{
        'custom-margin-top':'24px 0px 0px 0px',
        'custom-top-spacing':'8px 0px 0px 0px',
        '24px':'24px',
         '96px':'96px',
        'sm':'4px'
      },
      height:{
        'custom-btn-height':'40px',
        '564px':'564px'
        
      },
      width:{
        'custom-btn-width':'118px',
        'form-width':'577px'
      },
      colors:{
        'border-color':'#E6E6E6',
        'placeholder-color':'#7A7A7A'
      },

    },
  },
  plugins: [],
}