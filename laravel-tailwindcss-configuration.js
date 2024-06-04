const fonts = {
    mono : ['Söhne Mono', ...require('tailwindcss/defaultTheme').fontFamily.mono],
    sans : ['Söhne',      ...require('tailwindcss/defaultTheme').fontFamily.sans],
}

const sizes = Array(101).fill('').map((v, i) => i).reduce((a, i) => ({ ...a, [`${i}px`]: `${i}px`}), {});

const spacing = Object.assign({},
    Array(10).fill('').map((v, i) => i).reduce((a, i) => ({ ...a, [`${i + 1}/10`]: `${(i + 1) * 10}%`}), {}),
    Array(20).fill('').map((v, i) => i).reduce((a, i) => ({ ...a, [`${i + 1}/20`]: `${(i + 1) * 5}%`}), {}),
    Array(200).fill('').map((v, i) => i).reduce((a, i) => ({ ...a, [`${i + 1}px`]: `${i + 1}px`}), {}),
    Array(41).fill('').map((v, i) => i).reduce((a, i) => ({ ...a, [`${200 + (i * 25)}px`]: `${200 + (i * 25)}px`}), {}),
);

module.exports = {
    content  : ['./app/Enums/*.php', './resources/views/**/*.blade.php'],
    darkMode : 'selector',
    theme    : { extend : { fontFamily : fonts, fontSize : sizes, spacing : spacing } },
}