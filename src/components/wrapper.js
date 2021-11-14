import React from "react";
import ReactDOM from "react-dom";
import "d:/DOCUMENTS/PROJECTS/CERT PROJECTS/Random Quote machine/randomQuoteMachine/src/style.css";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = [
      [
        {
          quote:
            "Ask and it shall be given to you, knock and it will be opened unto thee, Seek and you'll find.",
          author: "Jesus",
        },
        {
          quote:
            "Ever Tried. Ever failed. No matter. Try again. Fail again. Fail better.",
          author: "Samuel Beckett",
        },
        {
          quote: "Someday is not a day of the week.",
          author: "Denise Brennan-Nelson",
        },
        {
          quote:
            "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times. ",
          author: "Bruce Lee ",
        },
        {
          quote:
            "Impossible is just a big word thrown around by small men who find it easier to live in the world they've been given than to explore the power they have to change it. Impossible is not a fact. It's an opinion. Impossible is not a declaration. It's a dare. Impossible is potential. Impossible is temporary. Impossible is nothing. ",
          author: " Muhammad Ali",
        },
        {
          quote: "Quality is not an act, it is a habit. ",
          author: "Aristotle",
        },
        {
          quote: " Never go to bed mad. Stay up and fight. ",
          author: "Phyllis Diller",
        },
        {
          quote: "Once we accept our limits, we go beyond them.",
          author: "Albert Einstein ",
        },
        {
          quote:
            "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
          author: "Maya Angelou",
        },
        {
          quote: "The harder I work, the luckier I get.",
          author: "Gary Player",
        },
        {
          quote:
            "The only limit to our realization of tomorrow, will be our doubts of today. ",
          author: " Franklin D. Roosevelt",
        },
        {
          quote: " We first make our habits, then our habits make us.",
          author: "  John Dryden",
        },
        {
          quote:
            "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them. ",
          author: "William Shakespeare",
        },
        {
          quote: " Light tomorrow with today.",
          author: "Elizabeth Barrett Browning",
        },
        {
          quote:
            " The very boiling water that hardens the egg, softens the potato.",
          author: " Pr. Caleb Mbabali",
        },
        {
          quote:
            " If you cannot fly then run, if you cant run then walk if you cannot walk then crow but whatever you do, do it moving forward!!",
          author: " Martin Luther King ",
        },
        {
          quote:
            " Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
          author: "Eric Raymond ",
        },
        {
          quote:
            "Even if you're on the right track, you'll get run over if you just sit there.",
          author: "Will Rogers",
        },
        {
          quote:
            "I know, somehow, that only when it is dark enough can you see the stars.",
          author: "Martin Luther King Jr. ",
        },
        {
          quote: " Whether you think you can or think you can't, you're right.",
          author: " Henry Ford ",
        },
        {
          quote: "You only live once, but if you do it right, once is enough. ",
          author: "Mae West ",
        },
        {
          quote: "Don't watch the clock. Do what it does. Keep going. ",
          author: " Sam Levenson",
        },
        {
          quote:
            " Live as if you were to die tomorrow. Learn as if you were to live forever.",
          author: "  Mahatma Gandhi",
        },
        {
          quote:
            "Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step. ",
          author: " Lao Tzu ",
        },
        {
          quote:
            ' Nothing is impossible, the word itself says "I\'m possible"!',
          author: " Audrey Hepburn",
        },
        {
          quote: " Tough times never last, but tough people do.",
          author: "Dr. Robert Schuller ",
        },
        {
          quote: " You miss 100% of the shots you don't take.",
          author: "Wayne Gretzky ",
        },
        {
          quote:
            "A person without an organised system of thoughts is always at the mercy of a person who has one ",
          author: "Edward Col ",
        },
        {
          quote:
            " Sadly, what we are finding in our company is that one of our best thinkers have never seen the University gate.",
          author: "Sir Robert Johns ",
        },
        {
          quote:
            " Every tree shade you see was planted by someone! Everything you see was someone's decision",
          author: " Ev. Katushabe",
        },
        {
          quote: " Time is the wisest councilor of all time!",
          author: "...Greek  ",
        },
        {
          quote: ` If you want to know the value of one year ask the student who failed a class because of one subject
          If you want to know the value of a month ask the mother who gave birth to a premature baby
          If you want to know the value of one hour ask a lover who's waiting to meet
          If you want to know the value of one minute ask a peerson who missed a train
          If you want to know the value of one second ask a person who just escaped death in a car accident.
          If you want to know the value of a 100th of a second ask the athelete who won a silver medal in the olympics `,
          author: "unknown",
        },
      ],
      {
        color: [
          "brown",
          "#12634b",
          "#f0a211",
          "#11f075a4",
          "#1158f0d2",
          "#287777d2",
          "#e005bcd2",
          "#fd3b00d2",
          "#fde400a4",
          "#00c2fda4",
          "#666e70a4",
          "#775c21cc",
          "#691549e5",
          "#68330fe5",
          "#3c4f5f",
        ],
      },
    ];
  }
  configComp = () => {
    let storeLength = this.state[0].length;
    let int = Math.floor(Math.random() * storeLength);
    let intQuote = this.state[0][int].quote;
    let intAuthor = this.state[0][int].author;
    let intColor = Math.floor(Math.random() * this.state[1].color.length);
    let back = this.state[1].color[intColor];
    document.getElementById("final").innerText = intQuote;
    document.getElementById("author").innerText = ` - ${intAuthor} -`;
    document.getElementById("container").style.backgroundColor = back;
    document.getElementById("text").style.color = back;
    document.getElementById("new-quote").style.backgroundColor = back;
    document.getElementById("icon").style.color = back;
    document.getElementById("icon-2").style.color = back;
    document.getElementById("icon-3").style.color = back;


  };

  render() {
    let intColor = Math.floor(Math.random() * this.state[1].color.length);
    let back = this.state[1].color[intColor];
    let storeLength = this.state[0].length;
    let int = Math.floor(Math.random() * storeLength);
    let intQuote = this.state[0][int].quote;
    let intAuthor = this.state[0][int].author;
    return (
      <div id="top-container">
        <div id="container" style={{ backgroundColor: back }}>
          <div id="quote-box">
            <p id="text" style={{ color: back }}>
              <i
                className="fas fa-quote-left"
                id="icon"
                style={{ color: back }}
              ></i>
              <span id="final">{intQuote}</span>
            </p>
            <p id="author"> -{intAuthor}- </p>
            <div id="buttons" style={{ color: back }}>
              <span>
                <a href="twitter.com/intent/tweet"><i className="fab fa-twitter-square" id="icon-2" style={{ color: back }}></i></a>
                <i class="fab fa-facebook-square" id="icon-3" style={{ color: back }}></i>
              </span>
              <span>
                <button
                  id="new-quote"
                  onClick={this.configComp}
                  style={{ backgroundColor: back }}
                >
                  New quote
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
