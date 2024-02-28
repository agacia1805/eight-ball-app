const randomizedWords = [
  {
    word: 'fernweh',
    language: 'German',
    description: 'feeling homesick for a place you have never been to',
  },
  {
    word: 'komorebi',
    language: 'Japanese',
    description:
      'rays of light dappling through overhead leaves, casting dancing shadows on the forest floor',
  },
  {
    word: 'tingo',
    language: 'Pascuense',
    description:
      'to gradually steal all the possession out of a neighbour’s house by borrowing and not returning',
  },
  {
    word: 'pochemuchka',
    language: 'Russian',
    description: 'a person who asks too many questions',
  },
  {
    word: 'gökotta',
    language: 'Swedish',
    description:
      'to wake up in the morning with the purpose of going outside to hear the first birds sing',
  },
  {
    word: 'bakku-shan',
    language: 'Japanese',
    description: 'a beautiful girl as long as she is being viewed from behind',
  },
  {
    word: 'backpfeifengesicht',
    language: 'German',
    description: 'a face that is badly in need of a fist',
  },
  {
    word: 'aware',
    language: 'Japanese',
    description:
      'the bittersweet feeling of a brief and fading moment of transcendent beauty',
  },
  {
    word: 'tsundoku',
    language: 'Japanese',
    description:
      'the act of leaving a book unread after buying it, typically piling it up together with other unread books',
  },
  {
    word: 'shlimazl',
    language: 'Yiddish',
    description: 'a chronically unlucky person',
  },
  {
    word: 'waldeinsamkeit',
    language: 'German',
    description: 'the feeling of being alone in the woods',
  },
  {
    word: 'hanyauku',
    language: 'Rukwangali',
    description: 'the act of walking on tiptoes across warm sand',
  },
  {
    word: 'gattara',
    language: 'Italian',
    description:
      'a woman, often old and lonely, who devotes herself to stray cats',
  },
  {
    word: 'iktsuarpok',
    language: 'Inuit',
    description: 'the frustration of waiting for someone to turn up',
  },
  {
    word: 'friolero',
    language: 'Spanish',
    description:
      'a person who is especially sensitive to cold weather and temperatures',
  },
  {
    word: 'schilderwald',
    language: 'German',
    description:
      'a street crowded with so many road signs that you become lost',
  },
  {
    word: 'utepils',
    language: 'Norwegian',
    description: 'to sit outside on a sunny day enjoying a beer',
  },
  {
    word: 'jaysus',
    language: 'Indonesian',
    description: 'an unfunny joke that’s told so badly that you actually laugh',
  },
  {
    word: 'tartle',
    language: 'Scottish',
    description:
      'the hesitation before introducing someone when you’ve forgotten their name',
  },
  {
    word: 'mångata',
    language: 'Spanish',
    description: 'the trail created by the moon’s reflection on water',
  },
  {
    word: 'kilig',
    language: 'Tagalog',
    description:
      'the feeling of butterflies in your stomach specifically associated with romance',
  },
  {
    word: 'flâner',
    language: 'French',
    description:
      'aimlessly wandering without any destination, just to enjoy the views',
  },
  {
    word: 'merak',
    language: 'Serbian',
    description:
      'the feeling you get from simple pleasures that adds up to a sense of happiness and fulfilment',
  },
  {
    word: 'gluggaveður',
    language: 'Icelandic',
    description: 'weather that looks beautiful but is unpleasant to be in',
  },
  {
    word: 'saudade',
    language: 'Portuguese',
    description: 'the longing for something beautiful that’s now gone',
  },
  {
    word: 'dustsceawung',
    language: 'Old English',
    description:
      'the realisation that everything will ultimately end up as dust',
  },
  {
    word: 'verschlimmbessern',
    language: 'German',
    description:
      'accidentally making things worse when trying to mend or improve it',
  },
  {
    word: 'culacinno',
    language: 'Italian',
    description: 'the ring left on a table from a moist glass',
  },
  {
    word: 'won',
    language: 'Korean',
    description: 'reluctance to let go of an illusion',
  },
  {
    word: 'yuánfèn',
    language: 'Mandarin',
    description: 'the fate between two people',
  },
  {
    word: 'forelsket',
    language: 'Norwegian',
    description: 'the euphoria experienced as you begin to fall in love',
  },
  {
    word: 'commuovere',
    language: 'Italian',
    description: 'a heartwarming story that moved you to tears',
  },
  {
    word: 'depaysement',
    language: 'French',
    description: 'the feeling that comes from not being in one’s home country',
  },
  {
    word: 'duende',
    language: 'Spanish',
    description: 'a work of art’s mysterious power to deeply move a person',
  },
  {
    word: 'goya',
    language: 'Urdu',
    description:
      'the moment when fantasy is so realistic that it temporarily becomes reality',
  },
  {
    word: 'hyggelig',
    language: 'Danish',
    description: 'a delightfully cozy, intimate moment or thing',
  },
  {
    word: 'jijivisha',
    language: 'Hindi',
    description: 'the strong, eternal desire to live and to continue living',
  },
  {
    word: 'wabi-sabi',
    language: 'Japanese',
    description: 'accepting the natural cycle of growth and decay',
  },
];

const randomizedProphecies = [
  {
    title: 'A note on life',
    content:
      'But life is very short and anxious for those who forget the past, neglect the present, and fear the future',
  },
  {
    title: 'Your tomorrow',
    content:
      'Tomorrow is tomorrow. Future cares have future cures, And we must mind today',
  },
  {
    title: 'Your future',
    content:
      'As for the future, your task is not to foresee it, but to enable it',
  },
  {
    title: 'Plant well',
    content:
      'Don’t judge each day by the harvest you reap but by the seeds that you plant',
  },
  {
    title: 'Dream a little',
    content: 'Dream lofty dreams, and as you dream, so you shall become',
  },
  {
    title: 'Keep your past',
    content:
      'Deleting a piece from the past is like deleting a corresponding piece from the future',
  },
  {
    title: 'Wait',
    content: 'The day will come…',
  },
  {
    title: 'Live well',
    content: 'You only live once, but if you do it right, once is enough',
  },
  {
    title: 'Be truthful',
    content:
      'It is better to be hated for what you are than to be loved for what you are not',
  },
  {
    title: 'Trust yourself',
    content: 'Everything you can imagine is real',
  },
  {
    title: 'Keep it simple',
    content:
      'Sometimes the questions are complicated and the answers are simple',
  },
  {
    title: 'Creation',
    content:
      'Life is not about finding yourself. Life is about creating yourself',
  },
  {
    title: 'It gets tough',
    content: 'Things change. And friends leave. Life does not stop for anybody',
  },
  {
    title: 'Let it go',
    content:
      'You cannot swim for new horizons until you have courage to lose sight of the shore',
  },
  {
    title: 'Look up',
    content: 'Only when it is dark enough can you see the stars',
  },
  {
    title: 'Hope is alive',
    content:
      'Never lose hope. Storms make people stronger and never last forever',
  },
  {
    title: 'Do it',
    content: 'In a time of destruction, create something',
  },
];

module.exports = {
  randomizedProphecies,
  randomizedWords,
};
