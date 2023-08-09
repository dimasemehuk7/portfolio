import {Component} from '@angular/core'
import {Skill} from "../../models/skill";

@Component({
  selector: 'app-skills-card',
  templateUrl: 'skillscard.component.html',
  styleUrls: ['skillscard.component.scss']
})

export class SkillscardComponent {

  skills: Skill[] = [
    {
      title: "Type Script",
      srcIcon: "../../assets/skills/typescript.svg"
    },
    {
      title: "Java Script",
      srcIcon: "../../assets/skills/javascript.svg"
    },
    {
      title: "Angular",
      srcIcon: "../../assets/skills/angular.svg"
    },
    {
      title: "MongoDb",
      srcIcon: "../../assets/skills/typescript.svg"
    },
    {
      title: "WebPack",
      srcIcon: "../../assets/skills/webpack.svg"
    },
    {
      title: "Git",
      srcIcon: "../../assets/skills/git.svg"
    }
  ]

}
