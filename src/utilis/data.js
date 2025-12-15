
import dune from "../Components/images/dune.jpg";
import agatha from "../Components/images/agatha.jpg";
import ama from "../Components/images/ama.jpg";
import atom from "../Components/images/atom.jpg";
import child from "../Components/images/child.jpg";
import dinner from "../Components/images/dinner.jpg";
import Ends from "../Components/images/Ends.jpg";
import girl from "../Components/images/girl.jpg";
import petals from "../Components/images/petals.jpg";
import iwill from "../Components/images/iwill.png";
import mid from "../Components/images/mid.jpg";
import stran from "../Components/images/stran.jpg";
import sun from "../Components/images/sun.jpg";
import uncharm from "../Components/images/uncharm.jpg";
import women from "../Components/images/women.jpg";
import b1984 from "../Components/images/b1984.jpg";
import road from "../Components/images/road.jpg";
import money from "../Components/images/money.jpg";
import rig from "../Components/images/rig.jpg";
import never from "../Components/images/never.jpg";
import yours from "../Components/images/yours.jpg";
import shot from "../Components/images/shot.jpg";
import harry from "../Components/images/harry.jpg";
import rose from "../Components/images/rose.jpg";
const books = [
  {
    id: "1",
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    src:dune,
    description: "Dune by Frank Herbert is a classic sci-fi epic about Paul Atreides on the desert planet Arrakis, the universe's only source of the valuable 'spice' melange, exploring deep themes of ecology, religion, politics, and survival as Paul rises to become a messianic leader amidst family betrayal and galactic power struggles involving giant sandworms and the native Fremen.",
    rating: 4.8,
  },
  {
    id: "2",
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    src:b1984,
    description: "George Orwell's 1984 is a dystopian novel about a totalitarian super-state, Oceania, where the ruling Party, led by the omnipresent Big Brother,controls every aspect of life through surveillance (Telescreens), propaganda, and thought control, exploring themes of totalitarianism, mass surveillance, censorship, and truth manipulation",
    rating: 4.7,
  },
  {
    id: "3",
    title: "The Women",
    author: "Kristain Hannah",
    category: "Fiction",
    src:women,
    description: "The Women by Kristin Hannah is a bestselling historical novel about Frances Frankie McGrath, a sheltered young woman who becomes an Army nurse in Vietnam in 1965, following her brother to war",
    rating: 4.9,
  },
  {
    id: "4",
    title: "Girl Dinner",
    author: "Olivie Blank",
    category: "Fiction",
    src:dinner,
    description: "Girl Dinner by Olivie Blake is a dark, satirical novel about power, ambition, and female bonding within an elite sorority, The House, where a freshman (Nina) and a professor (Sloane) get entangled in a sinister wellness cult that uses ritualistic meals to achieve perfection, exploring themes of female rage, motherhood, and privilege with biting humor and a taste of horror. ",
    rating: 3.5,
  },
  {
    id: "5",
    title: "Uncharmed",
    author: "Lucy Jane",
    category: "Fiction",
    src:uncharm,
    description: "A perfectionist witch who runs a magical London bakery, whose perfectly pink, charmed life gets messy when she must mentor a troubled teenage witch, Maeve, leading to self-discovery, found family with grumpy Hal, and navigating complex magic, love, and belonging outside her curated world.",
    rating: 3,
  },
  {
    id: "6",
    title: "The Golden Road",
    author: "William Dalry",
    category: "Non-Fiction",
    src:road ,
    description: "Describes ancient India (c. 250 BC–1200 AD) as a vibrant, interconnected hub that spread its culture, art, religions (like Buddhism), technology (math, astronomy), and ideas across Eurasia via sea and land routes, fundamentally shaping the world through trade and intellectual exchange",
    rating: 2.5,
  },
  {
    id: "7",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-Fiction",
    src:atom,
    description: "Atomic Habits by James Clear provides a practical framework for building good habits and breaking bad ones through tiny, incremental changes (atomic habits) that compound over time, focusing on systems over big goals",
    rating: 4.1,
  },
  {
    id: "8",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Non-Fiction",
    src:money,
    description: "The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness, by award-winning author Morgan Housel, is a best-selling personal finance book that emphasizes how an individual's behavior and mindset heavily influence their financial success, rather than their intelligence or technical knowledge of finance. ",
    rating: 4.1,
  },
  {
    id: "9",
    title: "Amazing Worlds",
    author: "Keith cooper",
    category: "Sci-Fi",
    src:ama,
    description: "Amazing Worlds refers to several books, but most prominently to Keith Coopers Amazing Worlds of Science Fiction and Science Fact, which blends fictional planets (like Tatooine, Arrakis, Pandora) with real exoplanet discoveries, assessing their scientific plausibility with expert insights, perfect for sci-fi and popular science fans..",
    rating: 4.9,
  },
  {
    id: "10",
    title: "Children of Time",
    author: "Adrian",
    category: "Sci-Fi",
    src:child,
    description: "A race for survival among the stars. Humanity's last survivors escaped earth's ruins to find a new home..",
    rating: 4.2,
  },
  {
    id: "11",
    title: "The Rig",
    author: "Roger Levy",
    category: "Sci-Fi",
    src:rig,
    description: "Rig is a raw, emotional story about loving someone whose life is divided between land and sea, and the quiet strength it takes to hold on when the world keeps pulling you apart.",
    rating: 4.2,
  },
  {
    id: "12",
    title: "I Will Always Love You",
    author: "Arpita Debanath",
    category: "Romance",
    src:iwill,
    description: "I Will Always Love You is a heartbreaking yet hopeful second-chance romance about letting go, holding on, and the kind of love that stays with you long after goodbye. It’s about choosing between the safety of what is and the pull of what could have been.",
    rating: 3.6,
  },
  {
    id: "13",
    title: "If I never met you",
    author: "Mhairi McFaraiane",
    category: "Romance",
    src:never,
    description: "If I Never Met You is a tender, bittersweet story about first love, loss, and the invisible ways one person can shape an entire lifetime. It’s about the kind of love that doesn’t last forever—but changes you forever.",
    rating: 4.5,
  },
  {
    id: "14",
    title: "Technically yours",
    author: "Denise williams",
    category: "Romance",
    src:yours,
    description: "Technically Yours explores what it means to belong to someone in every way except the one that matters most. It’s a story of timing that’s never quite right, love that never fully lets go, and the haunting question of who you’d be if you never met the person who changed everything.",
    rating: 4.6,
  },
  {
    id: "15",
    title: "Agatha Oddly",
    author: "Lena Jones",
    category: "Mystery",
    src:agatha,
    description: "Agatha Oddly is a fast-paced, clever middle-grade mystery packed with adventure, heart, and a heroine who proves that being different is sometimes your greatest strength.",
    rating: 4.7,
  },
  {
    id: "16",
    title: "Truly Devious",
    author: "Maureen Johnson",
    category: "Mystery",
    src:shot,
    description: "Truly Devious is a gripping mystery that weaves together past and present, filled with secret passages, clever clues, and twists that keep you guessing. It’s a story about obsession, friendship, and the irresistible pull of an unsolved crime.",
    rating: 4.2,
  },
  {
    id: "17",
    title: "The Girl in the House",
    author: "Harshavardhan Rao",
    category: "Mystery",
    src:girl,
    description: "The Girl in the House is a tense, atmospheric mystery about isolation, hidden lives, and the danger of staying silent for too long. It’s a story where nothing is as empty as it seems—and the scariest things are the ones that live just out of sight.",
    rating: 4.9,
  },
  {
    id: "18",
    title: "the sun and her flowers",
    author: "Rupi kaur",
    category: "Poetry",
    src:sun,
    description: "The Sun and Her Flowers is about honoring where you come from, reclaiming your voice, and finding beauty even after devastation. It is a celebration of resilience—the reminder that even after the harshest seasons, growth is still possible..",
    rating: 2.0,
  },
  {
    id: "19",
    title: "Petals of healing",
    author: "Anne raynoe",
    category: "Poetry",
    src:petals,
    description: "Petals of Healing is a gentle, soul-baring collection about pain, recovery, and learning how to choose yourself again. Through raw reflections and tender words, it explores heartbreak, grief, self-love, and the quiet strength it takes to keep going when you feel undone.",
    rating: 3.7,
  },
  {
    id: "20",
    title: "Where the sidewalk Ends",
    author: "Shel Silverstein",
    category: "Poetry",
    src:Ends,
    description: "Where the Sidewalk Ends is a beloved collection of poems and illustrations that invites readers into a world of nonsense, wonder, and unexpected wisdom. From children who refuse to take out the trash to giraffes with tiny problems and rules that are meant to be broken, Shel Silverstein blends humor with heart in every page..",
    rating: 4.1,
  },
  {
    id: "21",
    title: "Harry Potter",
    author: "J.K.Rowling",
    category: "Fiction",
    src:harry,
    description: "Harry Potter is a story about friendship, courage, love, and the power of choosing what is right—even when it is hard.",
    rating: 4.9,
  },
  {
    id: "22",
    title: "The midnight library",
    author: "Matt Haig",
    category: "Fiction",
    src:mid,
    description: "The Midnight Library is a poignant, thought-provoking novel about regret, hope, and the infinite possibilities that lie within every choice. It reminds readers that even small decisions can shape extraordinary lives—and that it’s never too late to find meaning and happiness.",
    rating: 4.7,
  },
  {
    id: "23",
    title: "The Rose Maker",
    author: "Alex Leu",
    category: "Sci-Fi",
    src:rose,
    description: "The Rose Maker is a heartwarming, character‑driven tale of resilience, renewal, and the courage it takes to cultivate a life worth living..",
    rating: 4.7,
  },
  {
    id: "24",
    title: "Through Stranger Eyes",
    author: "Chris Saran",
    category: "Sci-Fi",
    src:stran,
    description: "Through a Stranger’s Eyes is an intimate, heartfelt romance about seeing yourself with honesty, learning to love beyond fear, and discovering whether second chances can truly lead to forever.",
    rating: 2.9,
  }

];

export default books;
