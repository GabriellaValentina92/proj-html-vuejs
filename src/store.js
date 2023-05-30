import { reactive } from "vue";

export default reactive({
  ArrJournalReview: [
    {
      title: "Best Author of His Generation",
      text: "This book will change your perspective on life. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
      logo: "nytimes.png",
      writer: " Justine Klipatrick",
      journal: "The New York Times",
    },

    {
      title: " A true Masterpiece, Bravo!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
      logo: "guardian.png",
      writer: " Gerald Hendley",
      journal: " The Guardian",
    },

    {
      title: " A Unique view On the World",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
      logo: "globe.png",
      writer: " Mary Maxey",
      journal: " The Globe and Mail",
    },
  ],

  ArrEvent: [
    {
      photo: "event2.jpg",
      title: "Chicago Book Signing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
    },

    {
      photo: "event1.jpg",
      title: "Meet & Greet With Amanda",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
    },

    {
      photo: "event3.jpg",
      title: " Open Book: Dialogues",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.",
    },
  ],

  ArrAboutAuthor: [
    {
      image: "box-1.jpg",
      title: "About Me",
      subheading: "Vestibulum ante ipsum primis",
    },

    {
      image: "box-4.jpg",
      title: "My Latest Book",
      subheading: "Vestibulum ante ipsum primis",
    },

    {
      image: "box-3.jpg",
      title: "Book Singing",
      subheading: "Vestibulum ante ipsum primis",
    },
  ],

  ArrArticles: [
    {
      id: "01",
      image: "20-Tips600.jpg",
      title: "20 Creativity Tips",
      writer: "by admin",
      date: "October 24th, 2019",
      categories: "Event, tips & tricks",
      comment: "",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
      id: "02",
      image: "thumb-08.jpg",
      title: "What's on your Booklist?",
      writer: "",
      date: "October 24th, 2019",
      categories: "",
      comment: "0 comments",
      text: "",
    },

    {
      id: "03",
      image: "thumb-13.jpg",
      title: "Instabul Travel Guide",
      writer: "",
      date: "October 24th, 2019",
      categories: "",
      comment: "0 comments",
      text: "",
    },
  ],
});
