import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sa-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss'],
})
export class AppsComponent implements OnInit {
  public hideSideBar: any = false;
  public cardsList: any = [];
  public trendingTopicList: any = [];
  public followList: any = [];

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

    this.trendingTopicList = {
      id: 'trendingList',
      list: [
        {
          name: 'Web Development',
          link: 'link',
        },
        {
          name: 'App Development',
          link: 'link',
        },
        {
          name: 'AI & ML Research',
          link: 'link',
        },
        {
          name: 'Blockchain Technology',
          link: 'link',
        },
        {
          name: 'R & D Internship',
          link: 'link',
        },
        {
          name: 'TATA Technology',
          link: 'link',
        },
        {
          name: 'Indian Team',
          link: 'link',
        },
        {
          name: 'IPL',
          link: 'link',
        },
      ],
    };
    this.followList = {
      id: 'followList',
      list: [
        {
          profile_photo: 'https://picsum.photos/200',
          name: 'Virat Kholi',
          profile_id: 'viratkholi',
          link: 'link',
        },
        {
          profile_photo: 'https://picsum.photos/200',
          name: 'Keshav Raj',
          profile_id: 'keshavraj00',
          link: 'link',
        },
        {
          profile_photo: 'https://picsum.photos/200',
          name: 'Time Space',
          profile_id: 'timespacehd',
          link: 'link',
        },
        {
          profile_photo: 'https://picsum.photos/200',
          name: 'Rahul',
          profile_id: 'rahul790',
          link: 'link',
        },
      ],
    };
  }

  postScrollEvent(event: any) {
    try {
      this.hideSideBar = event;
    } catch (scrollEvent) {
      console.error();
    }
  }
}
