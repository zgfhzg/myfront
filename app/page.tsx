export default function Home() {
  const mainMenus = [
    {
      title: "Magna",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style1",
      img: "images/pic01.jpg",
    },
    {
      title: "Lorem",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style2",
      img: "images/pic02.jpg",
    },
    {
      title: "Feugiat",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style3",
      img: "images/pic03.jpg",
    },
    {
      title: "Tempus",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style4",
      img: "images/pic04.jpg",
    },
    {
      title: "Aliquam",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style5",
      img: "images/pic05.jpg",
    },
    {
      title: "Veroeros",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style6",
      img: "images/pic06.jpg",
    },
    {
      title: "Ipsum",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style2",
      img: "images/pic07.jpg",
    },
    {
      title: "Dolor",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style3",
      img: "images/pic08.jpg",
    },
    {
      title: "Nullam",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style1",
      img: "images/pic09.jpg",
    },
    {
      title: "Ultricies",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style5",
      img: "images/pic10.jpg",
    },
    {
      title: "Dictum",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style6",
      img: "images/pic11.jpg",
    },
    {
      title: "Pretium",
      summary: "Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.",
      style: "style4",
      img: "images/pic12.jpg",
    },
  ]
  return (
      <div id="main">
        <div className="inner">
          <header>
            <h1>This is Phantom, a free, fully responsive site<br/>
              template designed by <a href="http://html5up.net">HTML5 UP</a>.</h1>
            <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu
              elementum ipsum arcu
              vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet
              nullam dolore.</p>
          </header>
          <section className="tiles">
            {mainMenus.map((item) => (
                <article className={item.style} key={item.title}>
                  <span className="image">
                    <img src={item.img} alt=""/>
                  </span>
                  <a href="/generic">
                    <h2>{item.title}</h2>
                    <div className="content">
                      <p>{item.summary}</p>
                    </div>
                  </a>
                </article>
            ))}
          </section>
        </div>
      </div>
  );
}
