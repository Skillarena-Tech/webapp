import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  public hideSideBar: any = false;
  public cardsList: any = [];

  ngOnInit(): void {
    this.cardsList = [
      {
        name: 'Harsh Kholi',
        id: '@harsKohli',
        image: 'https://source.unsplash.com/random',
        description:
          'Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters.',
        posts: [
          {
            type: 'image',
            link: 'abc.jpg',
          },
        ],
        like_no: 23,
        comment_no: 34,
        share_no: 11,
        isLiked: true,
        isSaved: true,
        profile_image: 'https://picsum.photos/200',
      },
    ];
  }

  postScrollEvent(event: any) {
    try {
      this.hideSideBar = event;
    } catch (scrollEvent) {
      console.error();
    }
  }
}
