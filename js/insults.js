!(function() {
var stupidList = [
  "albatross-biting",
  "arse-breath'd",
  "bawdy",
  "bear-biting",
  "beef-witted",
  "boil-brained",
  "churlish",
  "clapper-clawed",
  "clod-brained",
  "clumpish",
  "cockered",
  "cougar-fowling",
  "dunder-headed",
  "excrement-wallowing",
  "fat-kidneyed",
  "fen-sucked",
  "fishwife-necked",
  "flap-wagging",
  "fusty",
  "goatish",
  "knotty-pated",
  "mewling",
  "odiferous",
  "pelican-buggering",
  "pigeon-liver'd",
  "pribbling",
  "profligate",
  "raccoon-liver'd",
  "reeky",
  "rump-faced",
  "rump-fed",
  "rump-renting",
  "self-rutting",
  "shard-borne",
  "spongy",
  "tickle-brained",
  "toad-spotted",
  "unchin-snouted",
  "weather-bitten",
  "wind-breaking",
  "yeasty"
];

var jerkList = [
  "basket-cockle",
  "boar-pig",
  "canker-blossom",
  "coxcomb",
  "flap-dragon",
  "flap-vampire bat",
  "flax-wench",
  "jackanapes",
  "knave",
  "miscreant",
  "nut-hook",
  "pignut",
  "pillock",
  "ratsbane",
  "scullion",
  "skainsmate",
  "skut",
  "varlot",
  "wagtail",
  "wantwit",
  "whey-face"
];

var fatList = [
 'avoirdupois',
 'corpulent',
 'elephantine',
 'hogs-bodied',
 'paunchy',
 'plumpish',
 'porcine',
 'portly',
 'rotund',
 'swinish',
 'thickset',
 'whalelike'
];

var ladyOfTheNightList = [
  'affection-peddler',
  'bawd',
  'harlot',
  'minx',
  'profligate',
  'purveyor of the world\'s oldest profession',
  'rent-rump',
  'slattern',
  'strumpet'
];

var activityList = [
  'mosquito-buggering',
  'tail-leasing',
  'wainscoting'
];

var femaleRelativeList = [
  'aunt',
  'grandmother',
  'great grandmother',
  'mother',
  'sister'
];

var animalList = [
  'hog',
  'walrus',
  'turkey',
  'weasel',
];

var frameWorks = [
  "An aging, brain-addled <animal> has more brains than thou, thou <jerk>!",
  "I shall not waste words with thee, but merely observe thou art a <stupid> <stupid> <jerk>.",
  "I would not expect a <stupid> <stupid> <jerk> like thee to understand even the depths of thine own worthlessness!",
  "In sooth, I have never seen a more <stupid> <jerk> than thou!",
  "Thou'rt a <fat> <stupid> <jerk>. Be thou not cross with me, for I am but the bearer of these bad tidings.",
  "Thou'rt so dull of wit, if I called thee a <stupid> <stupid> <jerk>, thou wouldst take it as a compliment!",
  "Verily, I am surprised that thou took time from thy busy <activity> schedule to cross words with me, thou <jerk>!",
  "Verily, thou art a <stupid> <jerk>!",
  "What's that? Didst thou say thou art a pathetic <stupid> <jerk>? Then thou speakest sooth!",
  "Wouldst thou match wits with me, thou <stupid> <jerk>? I see thou'rt unarmed for such a contest!",
  "If brains were grain, thou wouldst not have sufficient quantity to feed thy <fat> <female relative>!",
  "Thy <female relative> is so <fat>, when she sitteth in a hot bath, she maketh her own gravy!",
  "Thy <female relative> is a <fat> <lady of the night>. If that offendeth thee, thou shouldst not shoot the messenger!",
  "Thy <female relative> is so <fat>, when she doth sit around thy swine-pen of a house, she really sits around thy swine-pen of a house!",
  "Thy <female relative> is such a <stupid> <stupid> <lady of the night>, her attentions may be purchased with a scrap of paper enscrivened with the letters I.O.U.!",
  "Thy <female relative> is such a <stupid> <lady of the night>, she will entertain any gentlemen with a brass farthing to spend and offer change from the transaction!",
];

var pickRand = function(array) {
  var items = array.slice();
  return items[Math.floor(Math.random() * items.length)];
};

var replacements = {
  '<stupid>': function() {
    return pickRand(stupidList);
  },
  '<jerk>': function() {
    return pickRand(jerkList);
  },
  '<animal>': function() {
    return pickRand(animalList);
  },
  '<lady of the night>': function() {
    return pickRand(ladyOfTheNightList);
  },
  '<fat>': function() {
    return pickRand(fatList);
  },
  '<female relative>': function() {
    return pickRand(femaleRelativeList);
  },
  '<activity>': function() {
    return pickRand(activityList);
  },
};

var concoct = function() {
  var frame = pickRand(frameWorks);
  var matches = frame.match(/<[^>]*>/g);
  var result = frame;
  matches.forEach(function(p) {
    result = result.replace(p, replacements[p]());
  });

  return result;
};

var quotes = {
  'take a piece': {
    'rock': {
      'FM': [
        "I dress to kill, but tastefully",
        "You've got mud on your face",
        "Mamma,I just killed a man",
        "No time for losers",
        "I won't be a rock star, I will be a legend",
        "We are the champions!"
      ],
      'DB': [
        "You've really made the grade",
        "This is ground control to major DEAD!",
        "I'm an instant star. Just add water and stir.",
        "You would think that a rock star being married to a supermodel would be one of the greatest things in the world. It is."
      ],
    },
    'dance': {
      'OH': [
        "Eeeeeeeeeeeeeyyyyy",
        "Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeyyyyy",
        "Eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeyyyyy",
        "This is banging",
        "I'm a future classic",
        "Genres mean nothing to me.",
        "It's groovy and uplifting",
        "This is huge right now!",
      ],
      'Bjork': [
        "I am a grateful... grapefruit.",
        "Football is a fertility festival. Eleven sperm trying to get into the egg. I feel sorry for the goalkeeper.",
        "People are always asking me about eskimos, but there are no eskimos in Iceland.",
        "I'm a fountain of blood. In the shape of a girl.",
        "I am one of the most idiosyncratic people around."
      ],
    },
  },
  'lose a piece': {
    'rock': {
      'FM': [
        "There must be more to life than killing",
        "The show must go on!"
      ],
      'DB': [
        "I believe that I often bring out the best in somebody's talents",
        "I've never responded well to entrenched negative thinking"
      ],
    },
    'dance': {
      'OH': [
        "It's all relative, man",
        "I'm flying to vegas to DJ anyway",
      ],
      'Bjork': [
        "I'm just like anybody. I have my ups and downs.",
        "The English eat all sorts of birds - pigeons, ducks, sparrows - but if you tell them you eat puffin, you might as well come from Mars.",
        "Singing is like a celebration of oxygen.",
        "My first album didn't come out until I was 27, which in pop years is late, you know."
      ],
    },
  }
};

var showQuote = function($element, person, text) {
  $element.addClass(person);
  $element.text(text);
  $element.show();

  setTimeout(function() {
    $element.text('');
    $element.hide();
    $element.removeClass(person);
  }, 3000);
};

var capturedBants = function(payload) {
  // If the captured piece is white, black should shout!
  var side = payload.captured.search(/w/) !== -1 ?
    'rock' : 'dance';
  var $element = side === 'dance' ?
    $('.dance-bants') :
    $('.rock-bants');

  var person = pickRand(_.keys(quotes['take a piece'][side]));
  showQuote($element, person, pickRand(quotes['take a piece'][side][person]));

  // Sometime shout out something from the other side!
  if (Math.random() >= 0.5) {
    var side2 = side === 'dance' ? 'rock' : 'dance';
    var $element2 = side2 === 'dance' ?
      $('.dance-bants') :
      $('.rock-bants');
    var person2 = pickRand(_.keys(quotes['lose a piece'][side2]));
    console.log('Side2', side2);
    console.log('$element2', $element2);
    console.log('person2', person2);
    showQuote($element2, person2, pickRand(quotes['lose a piece'][side2][person2]));
  }
};

Bulletin.subscribe('captured', capturedBants);

window.concoct = concoct;

}());
