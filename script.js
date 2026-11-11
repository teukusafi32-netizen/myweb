const WORDS = [
  "about", "above", "adapt", "admit", "adopt", "adult", "after", "again", "agent", "agree",
  "ahead", "alarm", "album", "alert", "alien", "align", "alive", "allow", "alone", "along",
  "alter", "among", "angel", "anger", "angle", "angry", "apart", "apple", "apply", "arena",
  "argue", "arise", "armor", "array", "aside", "asset", "audio", "avoid", "awake", "award",
  "aware", "awful", "bacon", "badge", "badly", "baker", "bases", "basic", "basis", "beach",
  "beard", "beast", "began", "begin", "being", "below", "bench", "berry", "birth", "black",
  "blame", "blank", "blast", "blaze", "bleed", "blend", "bless", "blind", "block", "blood",
  "bloom", "blown", "board", "boast", "bonus", "boost", "booth", "bound", "brain", "brand",
  "brave", "bread", "break", "brick", "bride", "brief", "bring", "broad", "broke", "brook",
  "brown", "brush", "buddy", "build", "built", "bunch", "burst", "buyer", "cabin", "cable",
  "camel", "candy", "canoe", "cargo", "carry", "catch", "cause", "cease", "chain", "chair",
  "chalk", "champ", "chaos", "charm", "chart", "chase", "cheap", "check", "cheek", "cheer",
  "chess", "chest", "chief", "child", "chill", "china", "choir", "civic", "civil", "claim",
  "class", "clean", "clear", "clerk", "click", "cliff", "climb", "cling", "clock", "close",
  "cloth", "cloud", "coach", "coast", "color", "comic", "could", "count", "court", "cover",
  "crack", "craft", "crane", "crash", "crazy", "cream", "creek", "crime", "crisp", "cross",
  "crowd", "crown", "crush", "curve", "cycle", "daily", "dairy", "dance", "death", "debug",
  "decay", "delay", "depth", "diary", "digit", "dirty", "doing", "doubt", "dozen", "draft",
  "drama", "drawn", "dream", "dress", "drink", "drive", "drove", "dying", "eager", "early",
  "earth", "eight", "elect", "elite", "empty", "enemy", "enjoy", "enter", "entry", "equal",
  "error", "essay", "event", "every", "exact", "exist", "extra", "faith", "false", "fault",
  "feast", "fence", "fever", "fiber", "field", "fifth", "fifty", "fight", "final", "first",
  "fixed", "flame", "flash", "fleet", "flesh", "float", "floor", "flour", "fluid", "focus",
  "force", "frame", "fresh", "front", "frost", "fruit", "fully", "funny", "giant", "given",
  "glass", "globe", "glory", "glove", "going", "grace", "grade", "grain", "grand", "grant",
  "grape", "graph", "grass", "grave", "great", "green", "greet", "grief", "grill", "gross",
  "group", "guard", "guess", "guest", "guide", "habit", "happy", "harsh", "heart", "heavy",
  "hobby", "honey", "honor", "horse", "hotel", "house", "human", "humor", "ideal", "image",
  "index", "inner", "input", "issue", "jelly", "joint", "judge", "juice", "known", "label",
  "labor", "large", "laser", "later", "laugh", "layer", "learn", "least", "leave", "legal",
  "lemon", "level", "light", "limit", "local", "logic", "loose", "lucky", "lunch", "magic",
  "major", "maker", "march", "match", "maybe", "mayor", "meant", "medal", "media", "metal",
  "meter", "might", "minor", "minus", "model", "money", "month", "moral", "motor", "mount",
  "mouse", "mouth", "movie", "music", "never", "newly", "night", "noise", "north", "novel",
  "nurse", "occur", "ocean", "offer", "often", "order", "other", "ought", "paint", "panel",
  "panic", "paper", "party", "peace", "peach", "phase", "phone", "photo", "piano", "piece",
  "pilot", "pitch", "place", "plain", "plane", "plant", "plate", "point", "pound", "power",
  "press", "price", "pride", "prime", "print", "prior", "prize", "proof", "proud", "prove",
  "queen", "quick", "quiet", "quite", "radio", "raise", "range", "rapid", "ratio", "reach",
  "react", "ready", "refer", "relax", "renew", "reply", "right", "rival", "river", "roast",
  "rough", "round", "route", "royal", "rural", "scale", "scene", "scope", "score", "sense",
  "serve", "seven", "shade", "shake", "shall", "shape", "share", "sharp", "sheet", "shelf",
  "shell", "shift", "shine", "shirt", "shock", "shoot", "shore", "short", "shown", "sight",
  "since", "skill", "sleep", "slice", "slide", "small", "smart", "smile", "smoke", "solid",
  "solve", "sorry", "sound", "south", "space", "spare", "speak", "speed", "spend", "spice",
  "spite", "split", "spoke", "sport", "staff", "stage", "stand", "start", "state", "steam",
  "steel", "stick", "still", "stock", "stone", "stood", "store", "storm", "story", "strip",
  "stuck", "study", "stuff", "style", "sugar", "suite", "sunny", "super", "sweet", "table",
  "taken", "taste", "teach", "teeth", "thank", "their", "theme", "there", "these", "thick",
  "thing", "think", "third", "those", "three", "threw", "throw", "tight", "tired", "title",
  "today", "token", "total", "touch", "tough", "tower", "track", "trade", "train", "treat",
  "trend", "trial", "tribe", "trick", "tried", "truck", "truly", "trust", "truth", "twice",
  "under", "union", "unity", "until", "upper", "upset", "urban", "usage", "usual", "valid",
  "value", "video", "virus", "visit", "vital", "voice", "waste", "watch", "water", "whale",
  "wheel", "where", "which", "while", "white", "whole", "whose", "woman", "world", "worry",
  "worse", "worst", "worth", "would", "wound", "write", "wrong", "wrote", "yield", "young",
  "youth", "zebra",
  "aback", "abase", "abbey", "abbot", "abide", "abled", "abode", "abort", "about", "abuse",
  "abyss", "aches", "ached", "acids", "acing", "acorn", "acres", "acrid", "acted", "actor",
  "acute", "adage", "added", "adept", "adore", "adorn", "adore", "affix", "afire", "afoot",
  "afoul", "after", "agile", "aging", "aglow", "agony", "agree", "ahead", "aided", "aides",
  "aimed", "aired", "aisle", "alarm", "algae", "alibi", "alien", "allay", "alley", "allot",
  "allow", "alloy", "aloft", "amaze", "amble", "amend", "amiss", "ample", "amuse", "angel",
  "ankle", "annex", "annoy", "annul", "anode", "antic", "antsy", "anvil", "apace", "apart",
  "aphid", "aping", "apnea", "appal", "appet", "arbor", "ardor", "arena", "argot", "aroma",
  "arose", "array", "arrow", "arson", "ashen", "ashes", "asked", "askew", "aspic", "assay",
  "aster", "astir", "atlas", "atone", "attar", "attic", "audio", "augur", "aunty", "avail",
  "avert", "avian", "avion", "avows", "await", "awash", "axial", "axiom", "azure", "bails",
  "bairn", "baker", "balmy", "banal", "banjo", "barge", "baron", "basal", "batch", "bathe",
  "baton", "bawdy", "bayou", "beady", "beamy", "beech", "beefy", "beets", "befit", "begot",
  "belch", "belie", "belle", "belly", "below", "bendy", "beret", "beset", "bicep", "biddy",
  "biker", "binge", "bingo", "biome", "birch", "bison", "bitty", "bland", "bleak", "bleat",
  "bleep", "blimp", "bliss", "blitz", "bloat", "bloke", "blond", "blurb", "blurt", "blush",
  "bogus", "boing", "bolts", "bongo", "booby", "booby", "booze", "borax", "borne", "bosom",
  "botch", "bough", "bowel", "boxer", "brace", "brash", "brass", "bravo", "brawl", "brawn",
  "bribe", "brine", "brink", "brisk", "broil", "brood", "broth", "brunt", "budge", "buggy",
  "bugle", "bulge", "bulky", "bully", "bumpy", "burly", "butch", "bushy", "butte", "buyer",
  "bylaw", "cabal", "cacao", "cache", "cadet", "cairn", "caked", "canal", "caper", "caput",
  "carat", "carol", "carve", "caste", "cater", "cause", "cello", "cider", "cigar", "cinch",
  "circa", "cited", "cites", "civet", "clack", "clamp", "clang", "clank", "clash", "clasp",
  "cleat", "cleft", "clink", "cloak", "clomp", "clone", "colon", "comet", "comma", "conch",
  "coral", "corny", "couch", "cough", "coven", "covet", "covey", "cower", "coyly", "cramp",
  "crank", "crass", "crate", "crave", "credo", "creed", "crepe", "crept", "crest", "crept",
  "crock", "crone", "crony", "crumb", "crypt", "cumin", "curio", "curly", "curry", "curse",
  "curvy", "cutie", "datum", "daunt", "debit", "debut", "decal", "decor", "decoy", "decry",
  "defer", "deity", "delta", "delve", "demon", "dense", "derby", "detox", "deuce", "devil",
  "diner", "dingo", "disco", "ditch", "ditto", "ditty", "diver", "dizzy", "dodge", "dowry",
  "dowse", "dowel", "droll", "drank", "drape", "dread", "dregs", "drier", "dried", "drier",
  "drift", "drill", "drone", "drool", "droop", "dully", "dummy", "dumpy", "dunce", "dusky",
  "dusty", "dwarf", "dwell", "dwelt", "easel", "ebony", "edged", "edged", "edict", "edify",
  "eerie", "egret", "eider", "elbow", "elfin", "elope", "elude", "elven", "email", "embed",
  "ember", "emcee", "emery", "emote", "endue", "ensue", "envoy", "epoch", "epoxy", "erase",
  "erode", "ester", "ether", "ethic", "evade", "evoke", "exact", "exalt", "excel", "exert",
  "exile", "exult", "fable", "facet", "faint", "fairy", "fancy", "farce", "fatal", "fatty",
  "fauna", "fella", "felon", "femur", "ferry", "fetal", "fetch", "fewer", "fiend", "fiery",
  "filly", "filth", "filmy", "finch", "finer", "fizzy", "flack", "flail", "flair", "flake",
  "flaky", "flank", "flare", "flask", "fleck", "flick", "fling", "flint", "flirt", "flock",
  "floss", "flout", "flown", "foamy", "foist", "folio", "folly", "foray", "force", "forge",
  "forte", "forty", "forum", "found", "foyer", "frail", "frank", "fraud", "freed", "freer",
  "freon", "frisk", "frock", "froze", "froth", "frown", "fryer", "fudge", "fugue", "fumes",
  "fungi", "funky", "furry", "gaily", "gamer", "gamma", "gamut", "gassy", "gavel", "gawky",
  "gecko", "geese", "genie", "genre", "gents", "getup", "ghost", "ghoul", "giddy", "girth",
  "gland", "glare", "glaze", "gleam", "glean", "glide", "glint", "gloat", "gloss", "glove",
  "glued", "gnash", "gnome", "godly", "going", "golem", "golly", "goner", "gooey", "goose",
  "gorge", "gouge", "gourd", "grate", "graze", "greed", "greek", "grime", "grimy", "grind",
  "groan", "groin", "groom", "grope", "grove", "growl", "grown", "gruel", "gruff", "grunt",
  "guava", "gulch", "gully", "gumbo", "gummy", "guppy", "gusto", "gusty", "gushy", "gutsy",
  "gypsy",   "haiku", "hairy", "halve", "handy", "harem", "haunt", "haven", "havoc", "hazel",
  "heave", "hedge", "hefty", "heist", "helix", "hello", "hence", "heron", "hilly", "hinge",
  "hippo", "hitch", "hoard", "hobby", "hoist", "holly", "homem", "horde", "hotly", "hound",
  "hovel", "hover", "howdy", "human", "humid", "hunky", "hurry", "husky", "hydro", "hyena",
  "icily", "icing", "idiom", "idler", "idyll", "igloo", "imply", "inane", "incur", "inept",
  "inert", "infer", "ingot", "inlet", "inlay", "irate", "irony", "islet", "itchy", "ivory",
  "jaunt", "jazzy", "jiffy", "jingo", "joint", "joker", "jolly", "joust", "jumbo", "jumpy",
  "junta", "juror", "kaput", "karma", "kayak", "kebab", "khaki", "kinky", "kiosk", "kitty",
  "knack", "knead", "kneel", "knelt", "knife", "knoll", "known", "koala", "laden", "ladle",
  "lager", "lanky", "lapse", "latch", "lathe", "latte", "leach", "leaky", "lease", "ledge",
  "leech", "leery", "lefty", "leggy", "leigh", "lemma", "limbo", "linen", "liner", "lingo",
  "lipid", "lithe", "liver", "llama", "loamy", "loath", "lobby", "locus", "lodge", "lofty",
  "lolly", "loner", "lopey", "lotus", "louse", "lover", "lowly", "lucid", "lumen", "lusty",
  "lymph", "lyric", "macho", "macro", "madam", "madly", "mafia", "maize", "mange", "mango",
  "mangy", "mania", "manor", "maple", "marsh", "maser", "mason", "masse", "mauve", "maxim",
  "mealy", "mecca", "medic", "melee", "melon", "mercy", "merge", "merit", "messy", "midge",
  "midst", "miler", "milky", "mimic", "mince", "miser", "misty", "mocha", "modal", "mogul",
  "moist", "molar", "moldy", "moped", "mossy", "motto", "mover", "mower", "mucus", "mummy",
  "mural", "murky", "mushy", "musty", "myrrh", "nadir", "naive", "nanny", "nasty", "natty",
  "naval", "nerdy", "nerve", "never", "newer", "niche", "nifty", "ninja", "ninth", "noble",
  "nobly", "noisy", "nomad", "noose", "norms", "notch", "nudge", "nymph", "oaken", "oasis",
  "obese", "oblong", "octal", "oddly", "odder", "odour", "olden", "olive", "ombre", "omega",
  "onion", "onset", "oomph", "opium", "optic", "orbit", "organ", "otter", "ought", "ounce",
  "outdo", "outer", "ovary", "overt", "ovine", "oxide", "ozone", "paddy", "pagan", "paler",
  "palmy", "palsy", "papal", "parka", "parry", "parse", "pasta", "pasty", "patch", "patio",
  "pause", "paved", "paver", "pawed", "payee", "payer", "peace", "peaky", "pecan", "pedal",
  "peers", "penal", "pence", "penne", "penny", "perch", "peril", "perky", "pesky", "pesto",
  "petal", "petty", "phase", "picky", "piece", "piety", "piggy", "pinch", "piney", "pinky",
  "pinot", "pious", "piper", "pipit", "pique", "pixel", "pixie", "pizza", "plaid", "plait",
  "plank", "plaza", "plead", "pleat", "plied", "plier", "plumb", "plume", "plump", "plush",
  "poach", "podgy", "poesy", "poise", "poker", "polka", "polyp", "pooch", "poppa", "porch",
  "poser", "posit", "posse", "pouch", "pouty", "prank", "prawn", "preen", "preop", "prick",
  "primo", "primp", "prism", "privy", "prone", "prong", "prose", "prowl", "proxy", "prune",
  "psalm", "pubic", "pudgy", "pulpy", "pulse", "punch", "pupil", "puppy", "puree", "purer",
  "purge", "purse", "pushy", "putty", "quack", "quail", "quake", "qualm", "quark", "quart",
  "quash", "quasi", "quell", "query", "quest", "queue", "quill", "quilt", "quirk", "quota",
  "quote", "rabbi", "rabid", "racer", "radar", "radii", "radii", "rainy", "ramen", "ranch",
  "randy", "rarer", "raspy", "ratty", "raven", "rayon", "razor", "rebuy", "recap", "recur",
  "recut", "reeve", "regal", "rehab", "reign", "reins", "remit", "repay", "repel", "reset",
  "resin", "retro", "retry", "reuse", "rider", "ridge", "ridgy", "rifle", "rigid", "rigor",
  "rinse", "ripen", "riper", "risen", "riser", "risky", "robin", "robot", "rocky", "rodeo",
  "rogue", "roily", "roman", "roomy", "roost", "rover", "rowdy", "rower", "ruddy", "ruder",
  "rugby", "ruins", "rumba", "rumor", "rusty", "saber", "sadly", "saint", "salad", "salon",
  "salsa", "salty", "salve", "salvo", "sandy", "saner", "sappy", "sassy", "satin", "sauce",
  "saucy", "sauna", "saute", "savvy", "scald", "scale", "scalp", "scamp", "scant", "scare",
  "scarf", "scary", "scone", "scoff", "scold", "scone", "scoop", "scoot", "scorn", "scour",
  "scout", "scowl", "scram", "scrap", "screw", "scrub", "sedan", "seedy", "segue", "seize",
  "semen", "sepia", "serum", "setup", "shack", "shady", "shaft", "shaky", "shale", "shalt",
  "shard", "shark", "shear", "sheen", "sheep", "sheer", "shire", "shirk", "shoal", "shone",
  "shook", "shoos", "shove", "shown", "shrub", "shuck", "shunt", "shush", "siege", "sieve",
  "silly", "silky", "sisal", "sinew", "sissy", "sixth", "sixty", "skate", "skier", "skiff",
  "skimp", "skirt", "skulk", "skull", "skunk", "slack", "slain", "slang", "slant", "slate",
  "sleek", "sleet", "slept", "slime", "slimy", "sling", "slink", "slope", "slosh", "sloth",
  "slump", "slung", "slunk", "slurp", "slush", "sluts", "smack", "smash", "smear", "smell",
  "smelt", "smirk", "smite", "smith", "smock", "smoke", "smoky", "snack", "snail", "snake",
  "snaky", "snare", "snarl", "sneak", "sneer", "snide", "sniff", "snipe", "snoop", "snore",
  "snort", "snout", "snowy", "snuck", "sober", "soapy", "soggy", "solar", "sonar", "sonic",
  "sooth", "sooty", "sower", "soyuz", "spade", "spank", "spark", "spasm", "spawn", "spear",
  "speck", "spell", "spelt", "spent", "spied", "spiel", "spiky", "spill", "spilt", "spiny",
  "spire", "spoil", "spoof", "spook", "spool", "spoon", "spore", "spout", "spray", "spree",
  "spunk", "spurn", "squad", "squat", "squid", "stain", "stair", "stake", "stale", "stalk",
  "stall", "stamp", "stank", "stare", "stark", "stave", "stead", "steak", "steal", "steed",
  "steep", "stern", "stiff", "stile", "stilt", "sting", "stink", "stint", "stoic", "stoke",
  "stole", "stomp", "stoop", "stork", "stout", "stove", "straw", "stray", "strep", "strut",
  "stung", "stunk", "stunt", "suave", "sully", "sumac", "summa", "surer", "surge", "surly",
  "swami", "swamp", "swarm", "swash", "swath", "swear", "sweat", "sweep", "swell", "swept",
  "swift", "swill", "swine", "swing", "swirl", "swish", "swoon", "swoop", "sword", "swore",
  "sworn", "swung", "synod", "syrup", "tabby", "tacit", "tacky", "taffy", "taint", "taker",
  "tally", "talon", "tamer", "tango", "tangy", "taper", "tapir", "tardy", "tarot", "tarry",
  "taunt", "tawny", "teddy", "teary", "tempo", "tenet", "tenor", "tense", "tepee", "terse",
  "testy", "thaws", "theft", "their", "thorn", "thorn", "throb", "thrum", "thump", "thyme",
  "tiara", "tibia", "tidal", "tilde", "tiler", "timid", "tinge", "tipsy", "titan", "tithe",
  "titan", "toady", "toils", "tonal", "tonic", "tooth", "toxin", "trace", "tract", "tramp",
  "trash", "trawl",   "tread", "treed", "truce", "triad", "tripe", "troll", "troop", "trope",
  "trout", "truce", "truer", "truly", "trump", "trunk", "tulip", "tulle", "tunic", "tuner",
  "tweak", "tweed", "twang", "tweed", "tweet", "twine", "twirl", "twist", "tying", "udder",
  "ulcer", "ultra", "umbra", "uncle", "uncut", "under", "undue", "unfit", "unify", "unite",
  "unlit", "unpin", "unzip", "upend", "upper", "urban", "urine", "utter", "vague", "valet",
  "valor", "valve", "vapor", "vault", "vaunt", "vegan", "venom", "venue", "verge", "verse",
  "verso", "verve", "vicar", "vigil", "villa", "vinyl", "viola", "viper", "viral", "vista",
  "vixen", "vocal", "vodka", "vogue", "vomit", "voter", "vouch", "vowel", "wafer", "wager",
  "wacky", "waist", "waive", "waltz", "warty", "weary", "weave", "wedge", "weedy", "weepy",
  "welch", "welsh", "whack", "wharf", "wheat", "whelk", "whelp", "whiff", "whine", "whiny",
  "whisk", "whist", "whoop", "widen", "wider", "widow", "wield", "wight", "willy", "wimpy",
  "wince", "windy", "wiper", "wired", "wiser", "wispy", "witch", "witty", "woken", "wooer",
  "woozy", "woven", "wrack", "wrath", "wreak", "wrist", "xenon", "yearn", "yeast", "yodel",
  "yokel", "yummy", "zesty", "zonal"
];
const winDialog = document.getElementById("winDialog");
const winMessage = document.getElementById("winMessage");
const closeWinButton = document.getElementById("closeWinButton");
const playAgainButton = document.getElementById("playAgainButton");

const ROWS = 6;
const WORD_LENGTH = 5;
const KEY_ROWS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
const board = document.getElementById("board");
const keyboard = document.getElementById("keyboard");
const message = document.getElementById("message");
const helpDialog = document.getElementById("helpDialog");

let answer = "";
let currentRow = 0;
let currentGuess = "";
let gameOver = false;
let keyStates = {};
let tiles = [];

function buildBoard() {
  board.innerHTML = "";
  tiles = [];

  for (let row = 0; row < ROWS; row += 1) {
    const rowTiles = [];
    for (let column = 0; column < WORD_LENGTH; column += 1) {
      const tile = document.createElement("div");
      tile.className = "tile";
      tile.setAttribute("role", "gridcell");
      tile.setAttribute("aria-label", `Row ${row + 1}, letter ${column + 1}`);
      board.appendChild(tile);
      rowTiles.push(tile);
    }
    tiles.push(rowTiles);
  }
}

function buildKeyboard() {
  keyboard.innerHTML = "";

  KEY_ROWS.forEach((letters, rowIndex) => {
    const row = document.createElement("div");
    row.className = "keyboard-row";

    if (rowIndex === 2) {
      row.appendChild(makeKey("ENTER", true));
    }

    for (const letter of letters) {
      row.appendChild(makeKey(letter, false));
    }

    if (rowIndex === 2) {
      row.appendChild(makeKey("⌫", true));
    }
    keyboard.appendChild(row);
  });
}

function makeKey(label, wide) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = wide ? "key wide" : "key";
  button.textContent = label;
  button.setAttribute("aria-label", label === "⌫" ? "Backspace" : label);
  button.addEventListener("click", () => handleInput(label === "⌫" ? "BACKSPACE" : label));
  return button;
}

function startGame() {
  answer = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
  currentRow = 0;
  currentGuess = "";
  gameOver = false;
  keyStates = {};
  message.textContent = "";
  buildBoard();
  buildKeyboard();
}

function updateCurrentRow() {
  for (let column = 0; column < WORD_LENGTH; column += 1) {
    const letter = currentGuess[column] || "";
    tiles[currentRow][column].textContent = letter;
    tiles[currentRow][column].classList.toggle("filled", Boolean(letter));
    tiles[currentRow][column].setAttribute("aria-label", `Row ${currentRow + 1}, letter ${column + 1}${letter ? `: ${letter}` : ""}`);
  }
}

function handleInput(key) {
  if (gameOver) return;

  if (key === "ENTER") {
    submitGuess();
  } else if (key === "BACKSPACE") {
    currentGuess = currentGuess.slice(0, -1);
    updateCurrentRow();
  } else if (/^[A-Z]$/.test(key) && currentGuess.length < WORD_LENGTH) {
    currentGuess += key;
    updateCurrentRow();
  }
}

function submitGuess() {
  if (currentGuess.length !== WORD_LENGTH) {
    showMessage("Not enough letters");
    return;
  }

  const result = scoreGuess(currentGuess, answer);
  result.forEach((status, index) => {
    const tile = tiles[currentRow][index];
    tile.classList.add(status);
    tile.setAttribute("aria-label", `${currentGuess[index]}, ${status}`);
  });

  for (let index = 0; index < WORD_LENGTH; index += 1) {
    const letter = currentGuess[index];
    const status = result[index];
    const previous = keyStates[letter];
    if (status === "correct" || (status === "present" && previous !== "correct")) {
      keyStates[letter] = status;
    } else if (!previous) {
      keyStates[letter] = "absent";
    }
  }
  updateKeyboard();

  if (currentGuess === answer) {
    gameOver = true;
    showMessage("Brilliant! You got it 🎉");
    const guessCount = currentRow + 1;
    winMessage.textContent = `You found ${answer} in ${guessCount} ${guessCount === 1 ? "guess" : "guesses"}.`;
    winDialog.showModal();
    return;
  }

  currentRow += 1;
  currentGuess = "";
  if (currentRow === ROWS) {
    gameOver = true;
    showMessage(`The word was ${answer}`);
  }
}

function scoreGuess(guess, target) {
  const result = Array(WORD_LENGTH).fill("absent");
  const remaining = target.split("");

  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (guess[index] === target[index]) {
      result[index] = "correct";
      remaining[index] = null;
    }
  }

  for (let index = 0; index < WORD_LENGTH; index += 1) {
    if (result[index] === "correct") continue;
    const match = remaining.indexOf(guess[index]);
    if (match !== -1) {
      result[index] = "present";
      remaining[match] = null;
    }
  }

  return result;
}

function updateKeyboard() {
  keyboard.querySelectorAll(".key").forEach((button) => {
    const state = keyStates[button.textContent];
    if (state) button.classList.add(state);
  });
}

function showMessage(text) {
  message.textContent = text;
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey || event.metaKey || event.altKey) return;
  if (event.key === "Enter") {
    event.preventDefault();
    handleInput("ENTER");
  } else if (event.key === "Backspace") {
    handleInput("BACKSPACE");
  } else if (/^[a-zA-Z]$/.test(event.key)) {
    handleInput(event.key.toUpperCase());
  }
});

document.getElementById("newGameButton").addEventListener("click", startGame);
document.getElementById("helpButton").addEventListener("click", () => helpDialog.showModal());
document.getElementById("closeHelpButton").addEventListener("click", () => helpDialog.close());
closeWinButton.addEventListener("click", () => winDialog.close());
playAgainButton.addEventListener("click", () => {
  winDialog.close();
  startGame();
});

startGame();
