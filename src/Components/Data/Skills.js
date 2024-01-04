const skills = [
    
    
    
    
    
    
    
    
    
    
    
    
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
        text:"HTML"
    },
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        text:"CSS"
    },
    // {
    //     icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    //     text:"BOOTSTRAP"
    // },
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        text:"TAILWIND"
    },
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        text:"JAVASCRIPT"
    },
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        text:"REACT"
    },
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        text:"REDUX"
    },
    {
        icon:"https://portfolio-m-sehrawat.vercel.app/chakra-ui.png",
        text:"CHAKRA UI"
    },
    {
        icon:"data:image/png;base64,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",
        text:"TYPESCRIPT"
    },
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        text:"GIT"
    },
    // {
    //     icon:"https://img.icons8.com/color/50/000000/material-ui.png",
    //     text:"MATERIAL UI"
    // },
    {
        icon:"https://img.icons8.com/color/48/000000/npm.png",
        text:"NPM"
    }, {
        icon:"https://img.icons8.com/nolan/64/api-settings.png",
        text:"REST API"
    },
    {
        icon:"https://devashishsaurabhportfolio.netlify.app/assets/img/express.png",
        text:"EXPRESS"
    },
    {
        icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        text:"NODE JS"
    },
    {
        icon:"https://img.icons8.com/color/50/000000/mongodb.png",
        text:"MONGO DB"
    },
    {
        icon:"https://miro.medium.com/max/1050/1*acfAKaDI7uv5GyFnJmiPhA.png",
        text:"MONGOOSE"
    }
  
]

export default skills