import { Component, OnInit } from '@angular/core';

import { 
  faLinkedin, faGithub, faTwitch, faInstagram, faHtml5, faCss3Alt, faJsSquare, 
  faAngular, faAndroid,faLinux,faJava,faLaravel, faPhp, faPython, faSass,
  faWordpress, faPiedPiperAlt, faTrello, faJira, faGitAlt, faDocker, faAviato, 
  faHooli, faFigma, faGitlab, faLess, faNodeJs, faRaspberryPi, faVuejs, faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import { NavigationMenuService } from 'src/app/service/navigation-menu.service';

@Component({
  selector: 'app-vitae',
  templateUrl: './vitae.component.html',
  styleUrls: ['./vitae.component.scss']
})
export class VitaeComponent implements OnInit {
  data = {
    name: "Darth Çeqüella",
    firstName: "Darth",
    secondName: "Çeqüella",
    email: "pedro.oliveira.demolay@gmail.com",
    social: [
      { icon: faLinkedin, link: "#!", class: "linkedin" },
      { icon: faGithub, link: "#!", class: "github" },
      { icon: faTwitch, link: "#!", class: "twitch" },
      { icon: faInstagram, link: "#!", class: "instagram" },
    ],
    experience: [
      {
        title: "Senior Web Developer",
        enterprise: "Intelitec Solutions",
        description: `Bring to the table win-win survival strategies to ensure proactive domination. At the end of the
        day, going forward, a new normal that has evolved from generation X is on the runway heading
        towards a streamlined cloud solution. User generated content in real-time will have multiple
        touchpoints for offshoring.`,
        startAt: "March 2013",
        endAt: null
      },
      {
        title: "Web Developer",
        enterprise: "Intelitec Solutions",
        description: `Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
        Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion
        along the information highway will close the loop on focusing solely on the bottom line.`,
        startAt: "December 2011",
        endAt: "March 2013"
      }
    ],
    education: [
      {
        institution: "University of Colorado Boulder",
        grade: "Bachelor of Science",
        description: "Computer Science - Web Development Track",
        startAt: "August 2006",
        endAt: null
      }
    ],
    tools: [
      faHtml5, faCss3Alt, faSass, faLess, faJsSquare, faAngular, faAndroid, faGitAlt, faLinux,
      faJava, faLaravel, faPhp, faPython, faHooli, faWordpress, faNodeJs, faBootstrap,
      faTrello, faJira, faDocker, faAviato, faFigma, faGitlab, faPiedPiperAlt, faRaspberryPi, faVuejs
    ],
    otherTools: [
      "C", "CPlus", "CSharp", "Flutter",
      "Golang", "Django", "Typescript", "Lua",
      "Opengl", "Vulkan", "Material"
    ],
    content: [
      {
        img: {
          src: "assets/img/Vulkan.svg",
          alt: "Vulkan tutorial"
        },
        description: `
        When forced indoors, I follow a number of sci-fi and fantasy genre movies and television
        shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest
        technology advancements in the front-end web development world.
        `,
        link: "/vulkan"
      },
      {
        img: {
          src: "assets/img/Vulkan.svg",
          alt: "Vulkan tutorial"
        },
        description: `
        When forced indoors, I follow a number of sci-fi and fantasy genre movies and television
        shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest
        technology advancements in the front-end web development world.
        `,
        link: "/arts/sacilotto"
      },
    ]
  }

  constructor(private navigationMenuService: NavigationMenuService) { }

  get emailLink(): string {
    return `mailto:${this.data.email}`;
  }

  ngOnInit(): void {
    this.data.otherTools = this.data.otherTools.map(el => `assets/img/${el}.svg`);
  
    this.navigationMenuService.update(
      [
        { label: "About", link: "about" },
        { label: "Experience", link: "experience" },
        { label: "Education", link: "education" },
        { label: "Skills", link: "skills" },
        { label: "Interests", link: "interests" },
        { label: "Contents", link: "contents" },
      ]);
  }

}
