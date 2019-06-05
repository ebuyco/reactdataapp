import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Example React Application',
    description: 'A React App that I built, involving JS and core web dev concepts using react native!',
    link: 'https://github.com/ebuyco/ReactNative',
    image: project1
  },
  {
    id: 2,
    title: 'My API',
    description: 'A REST API that I built from scratch with GET and POST requests!',
    link: 'https://github.com/ebuyco/React-Burgerapp',
    image: project2
  },
  {
    id: 3,
    title: 'Graphql authentication',
    description: 'My unique project using graphql.',
    link: 'https://github.com/ebuyco/auth-with-graphql',
    image: project3
  }
];

export default PROJECTS;
