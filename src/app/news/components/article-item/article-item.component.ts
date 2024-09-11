import {Component, Input} from '@angular/core';
import {Article} from "../../model/article.entity";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage, MatCardTitle,
  MatCardTitleGroup
} from "@angular/material/card";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatAnchor,
    MatIcon,
    MatIconButton,
    MatCardTitle
  ],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
  @Input() article!: Article;


}
