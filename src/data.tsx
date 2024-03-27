import niaImage from './assets/nia.svg'
import { FaGithubSquare, FaLinkedin, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb'

export const navbar = {
  sections: {
    1: 'home',
    2: 'skills',
    3: 'about',
    4: 'projects'
  }
}

export const hero = {
  title: 'i\'m chinh',
  subtitle: 'frontend developer',
  text: 'turning ideas into interactive reality',
  links: {
    github: {
      url: 'https://github.com/chinh-dev11/',
      title: 'GitHub account',
      icon: <FaGithubSquare />
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/chinh11/',
      title: 'Linkedin account',
      icon: <FaLinkedin />
    },
  },
  image: {
    src: niaImage,
    title: 'no image available'
  }
}

export const skills = {
  title: 'tech stack',
  items: [
    {
      title: 'HTML & CSS',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro repellat asperiores tenetur ab hic cumque dolorem ea, dicta dignissimos veniam doloribus quo earum qui! Praesentium delectus fugit amet recusandae.',
      icon: <FaHtml5 />,
    },
    {
      title: 'javascript',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro repellat asperiores tenetur ab hic cumque dolorem ea, dicta dignissimos veniam doloribus quo earum qui! Praesentium delectus fugit amet recusandae.',
      icon: <FaJs />,
    },
    {
      title: 'react',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro repellat asperiores tenetur ab hic cumque dolorem ea, dicta dignissimos veniam doloribus quo earum qui! Praesentium delectus fugit amet recusandae.',
      icon: <FaReact />,
    },
  ]
}

export const about = {
  title: 'code and coffee',
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ad quia ipsam numquam maiores quos sint provident ipsum neque nihil autem, tenetur reprehenderit corporis. Sequi suscipit aspernatur necessitatibus id blanditiis!',
  image: {
    src: niaImage,
    title: 'no image available'
  }
}

export const projects = {
  title: 'web creations',
  items: [
    {
      title: 'project 1',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum velit consequuntur voluptatibus eaque, sed maxime blanditiis ducimus et ad perspiciatis, rem quasi. Iusto ipsum alias excepturi facere neque sint.',
      links: {
        project: {
          url: '/projectUrl',
          title: 'to the app',
          icon: <TbWorldWww />
        },
        github: {
          url: '/projectUrl',
          title: 'project repo',
          icon: <FaGithubSquare />
        }
      },
      image: {
        src: niaImage,
        title: 'no image available'
      }
    },
    {
      title: 'project 2',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum velit consequuntur voluptatibus eaque, sed maxime blanditiis ducimus et ad perspiciatis, rem quasi. Iusto ipsum alias excepturi facere neque sint.',
      links: {
        project: {
          url: '/projectUrl',
          title: 'to the app',
          icon: <TbWorldWww />
        },
        github: {
          url: '/projectUrl',
          title: 'project repo',
          icon: <FaGithubSquare />
        }
      },
      image: {
        src: niaImage,
        title: 'no image available'
      }
    },
    {
      title: 'project 3',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorum velit consequuntur voluptatibus eaque, sed maxime blanditiis ducimus et ad perspiciatis, rem quasi. Iusto ipsum alias excepturi facere neque sint.',
      links: {
        project: {
          url: '/projectUrl',
          title: 'to the app',
          icon: <TbWorldWww />
        },
        github: {
          url: '/projectUrl',
          title: 'project repo',
          icon: <FaGithubSquare />
        }
      },
      image: {
        src: niaImage,
        title: 'no image available'
      }
    },
  ]
}