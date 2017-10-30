import songs from './songs.js';

const arrQuestions = [
  {
    level: 0,
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[0].src,
    optionAnswer: [songs[0], songs[1], songs[2]],
    correctAnswer: songs[0].artist
  },
  {
    level: 1,
    type: `genre`,
    title: `Выберите рок треки`,
    optionAnswer: [songs[0], songs[1], songs[2], songs[3]],
    correctAnswer: [songs[1].name]
  },
  {
    level: 2,
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[2].src,
    optionAnswer: [songs[0], songs[2], songs[3]],
    correctAnswer: songs[2].artist
  },
  {
    level: 3,
    type: `genre`,
    title: `Выберите R&B треки`,
    optionAnswer: [songs[0], songs[1], songs[3], songs[5]],
    correctAnswer: [songs[3].name]
  },
  {
    level: 4,
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[4].src,
    optionAnswer: [songs[2], songs[3], songs[4]],
    correctAnswer: songs[4].artist
  },
  {
    level: 5,
    type: `genre`,
    title: `Выберите Electronic треки`,
    optionAnswer: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[5].name]
  },
  {
    level: 6,
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[1].src,
    optionAnswer: [songs[1], songs[3], songs[5]],
    correctAnswer: songs[1].artist
  },
  {
    level: 7,
    type: `genre`,
    title: `Выберите кантри треки`,
    optionAnswer: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[2].name]
  },
  {
    level: 8,
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[3].src,
    optionAnswer: [songs[0], songs[3], songs[4]],
    correctAnswer: songs[3].artist
  },
  {
    level: 8,
    type: `genre`,
    title: `Выберите поп треки`,
    optionAnswer: [songs[2], songs[3], songs[4], songs[5]],
    correctAnswer: [songs[4].name]
  },
  {
    level: 9,
    type: `artist`,
    title: `Кто исполняет эту песню?`,
    songSrc: songs[5].src,
    optionAnswer: [songs[0], songs[3], songs[4]],
    correctAnswer: songs[5].artist
  },
  {
    level: 10,
    type: `genre`,
    title: `Выберите джаз треки`,
    optionAnswer: [songs[0], songs[2], songs[4], songs[5]],
    correctAnswer: [songs[0].name]
  },
];

export default arrQuestions;
