import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";
import styles from './App.module.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasmiko.png",
      name: "Lucas Mikó",
      role: "Front-end React Developer"
    },
    content: [
      { type: 'paragraph', content: 'Hey, everyone! 👋'},
      { type: 'paragraph', content: "I've just uploaded another project to my portfolio. It's a project I created during Ignite. The project's name is React Feed 🚀"},
      { type: 'link', content: 'lucasmiko.github.io/reactfeed'}
    ],
    publishedAt: new Date('2023-08-15T21:26:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/leoalvesousa.png",
      name: "Leo Souza",
      role: "Full-stack Developer"
    },
    content: [
      { type: "paragraph", content: "Hello everyone! 👋 I've got some exciting news." },
      { type: "paragraph", content: "I'm thrilled to share my latest project, which I built during the CodeCrafters Hackathon. The project is called EcoTracker 🌱." },
      { type: "link", content: "www.samsimoes.dev/ecotracker" }
    ],
    publishedAt: new Date('2023-08-14T23:30:00')
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/emersons2.png",
      name: "Emerson Silva",
      role: "Product Manager"
    },
    content: [
      { type: "paragraph", content: "Hi folks! 👋 Exciting update from the product team." },
      { type: "paragraph", content: "We've just launched a new feature-rich app, KitchenPal 🍳, designed to make cooking a breeze. Check out all the cool functionalities!" },
      { type: "link", content: "www.emersons2.pm/kitchenpal" }
    ],
    publishedAt: new Date('2023-08-13T10:45:00')
  },
  {
    id: 5,
    author: {
      avatarUrl: "https://github.com/joaohcrangel.png",
      name: "João Rangel",
      role: "Mobile App Developer"
    },
    content: [
      { type: "paragraph", content: "Hey there! 👋 Big news in the app development world." },
      { type: "paragraph", content: "I'm excited to introduce my latest creation, FitTrack 🏃‍♂️, a fitness tracking app with real-time analytics. It's now available for download!" },
      { type: "link", content: "www.joaohcrangel.dev/fittrack" }
    ],
    publishedAt: new Date('2023-08-10T14:20:00')
  }
];

function App() {
  return (
    <>
     <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
         {posts.map(post => {
          return (
            <Post
            key={post.id}
            post={post}/>
          )
         })}
      </main>
     </div>
    </>
  )
}

export default App
