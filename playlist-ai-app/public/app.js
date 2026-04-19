const questions = [
  {
    id: "energy",
    text: "What energy level should this playlist carry?",
    help: "This controls the pace and intensity of the tracklist.",
    options: [
      {
        label: "Soft landing",
        note: "Dreamy, gentle, low-key.",
        weights: { calm: 3, acoustic: 2, focus: 1 },
      },
      {
        label: "Mid-tempo cruise",
        note: "Smooth, stylish, balanced.",
        weights: { groove: 2, indie: 2, focus: 1 },
      },
      {
        label: "Main character mode",
        note: "Confident and cinematic.",
        weights: { pop: 2, groove: 2, bold: 2 },
      },
      {
        label: "Full adrenaline",
        note: "Explosive and high-energy.",
        weights: { dance: 3, hype: 3, bold: 1 },
      },
    ],
  },
  {
    id: "setting",
    text: "Where are you most likely listening?",
    help: "The engine matches environment with texture.",
    options: [
      {
        label: "Late-night room",
        note: "Dim lights and headphones.",
        weights: { calm: 2, alt: 2, focus: 1 },
      },
      {
        label: "Commute window seat",
        note: "Moving city, reflective mood.",
        weights: { indie: 2, groove: 2, cinematic: 1 },
      },
      {
        label: "Gym or run",
        note: "Momentum first.",
        weights: { dance: 2, hype: 3, bold: 1 },
      },
      {
        label: "Weekend hangout",
        note: "Social, fun, easy to share.",
        weights: { pop: 2, groove: 2, dance: 1 },
      },
    ],
  },
  {
    id: "mood",
    text: "Which emotional color feels closest today?",
    help: "Mood heavily affects the final playlist identity.",
    options: [
      {
        label: "Calm",
        note: "Centered and unhurried.",
        weights: { calm: 3, focus: 2 },
      },
      {
        label: "Romantic",
        note: "Warm, intimate, glowing.",
        weights: { rnb: 3, pop: 1, calm: 1 },
      },
      {
        label: "Restless",
        note: "Need movement and release.",
        weights: { dance: 2, hype: 2, alt: 1 },
      },
      {
        label: "Hopeful",
        note: "Open skies, forward motion.",
        weights: { indie: 2, cinematic: 2, groove: 1 },
      },
    ],
  },
  {
    id: "era",
    text: "Pick the era your ears lean toward.",
    help: "This nudges the app toward sonic references.",
    options: [
      {
        label: "Timeless classics",
        note: "Warm grooves and songwriting.",
        weights: { soul: 3, groove: 2, acoustic: 1 },
      },
      {
        label: "2000s nostalgia",
        note: "Big hooks and iconic choruses.",
        weights: { pop: 2, rnb: 2, bold: 1 },
      },
      {
        label: "2010s indie wave",
        note: "Alt-pop and emotional textures.",
        weights: { indie: 3, alt: 2 },
      },
      {
        label: "Current and cinematic",
        note: "Fresh production and widescreen emotion.",
        weights: { dance: 2, pop: 2, cinematic: 1 },
      },
    ],
  },
  {
    id: "vocals",
    text: "What kind of voice should lead the playlist?",
    help: "Vocals influence intimacy and intensity.",
    options: [
      {
        label: "Airy and soft",
        note: "Whispery and spacious.",
        weights: { calm: 2, indie: 2, alt: 1 },
      },
      {
        label: "Rich and soulful",
        note: "Warmth, depth, emotion.",
        weights: { soul: 2, rnb: 2, groove: 1 },
      },
      {
        label: "Bold star energy",
        note: "Big moments and clean hooks.",
        weights: { pop: 3, dance: 1, bold: 1 },
      },
      {
        label: "I barely want lyrics",
        note: "Atmosphere over words.",
        weights: { focus: 3, cinematic: 2, calm: 1 },
      },
    ],
  },
  {
    id: "weather",
    text: "If this playlist had weather, what would it be?",
    help: "Yes, this is subjective. It still helps a lot.",
    options: [
      {
        label: "Rain on glass",
        note: "Reflective and intimate.",
        weights: { calm: 2, alt: 2, rnb: 1 },
      },
      {
        label: "Golden hour",
        note: "Warm and glowing.",
        weights: { groove: 2, soul: 2, pop: 1 },
      },
      {
        label: "Neon midnight",
        note: "Electric and stylish.",
        weights: { dance: 2, alt: 2, bold: 1 },
      },
      {
        label: "Blue-sky drive",
        note: "Open-road optimism.",
        weights: { indie: 2, cinematic: 2, pop: 1 },
      },
    ],
  },
  {
    id: "discovery",
    text: "How adventurous should the recommendations be?",
    help: "This sets how familiar or exploratory the mix feels.",
    options: [
      {
        label: "Keep it familiar",
        note: "Safe, easy, comforting.",
        weights: { pop: 2, groove: 1, soul: 1 },
      },
      {
        label: "A little fresh",
        note: "Mostly friendly, slightly new.",
        weights: { indie: 2, groove: 1, rnb: 1 },
      },
      {
        label: "Surprise me",
        note: "Unexpected but still coherent.",
        weights: { alt: 2, cinematic: 2, dance: 1 },
      },
      {
        label: "Take me somewhere layered",
        note: "Textured, moody, a little unusual.",
        weights: { alt: 3, focus: 1, cinematic: 2 },
      },
    ],
  },
  {
    id: "tempo",
    text: "How should the playlist move from start to finish?",
    help: "This affects the sequence and pacing arc.",
    options: [
      {
        label: "Stay gentle",
        note: "Low spikes, smooth ride.",
        weights: { calm: 2, focus: 2, acoustic: 1 },
      },
      {
        label: "Slow build",
        note: "Begin soft, end strong.",
        weights: { cinematic: 2, indie: 1, bold: 1, dance: 1 },
      },
      {
        label: "Consistent bounce",
        note: "Steady pulse all the way.",
        weights: { groove: 2, pop: 1, dance: 1 },
      },
      {
        label: "Hit hard immediately",
        note: "No warm-up needed.",
        weights: { hype: 3, dance: 2 },
      },
    ],
  },
  {
    id: "purpose",
    text: "What is this playlist mainly for?",
    help: "Purpose helps prioritize usefulness over novelty.",
    options: [
      {
        label: "Deep focus",
        note: "Minimal distraction.",
        weights: { focus: 3, calm: 2 },
      },
      {
        label: "Healing my mood",
        note: "Emotional support, but make it beautiful.",
        weights: { calm: 2, rnb: 1, soul: 2 },
      },
      {
        label: "Getting ready to go out",
        note: "Confidence and momentum.",
        weights: { pop: 2, bold: 2, dance: 1 },
      },
      {
        label: "Soundtracking my day",
        note: "Versatile and replayable.",
        weights: { indie: 2, groove: 2, cinematic: 1 },
      },
    ],
  },
  {
    id: "wildcard",
    text: "Choose your wildcard ingredient.",
    help: "The final twist that personalizes the set.",
    options: [
      {
        label: "Acoustic warmth",
        note: "Organic and human.",
        weights: { acoustic: 3, soul: 1, calm: 1 },
      },
      {
        label: "Bass you can feel",
        note: "Low-end swagger.",
        weights: { rnb: 2, groove: 2, hype: 1 },
      },
      {
        label: "Synth shimmer",
        note: "Glossy and luminous.",
        weights: { pop: 2, dance: 2, cinematic: 1 },
      },
      {
        label: "Indie oddness",
        note: "A little beautiful chaos.",
        weights: { alt: 2, indie: 2, cinematic: 1 },
      },
    ],
  },
];

const trackCatalog = [
  {
    title: "Tum Hi Ho",
    artist: "Arijit Singh, Mithoon",
    bpm: 84,
    tags: ["calm", "soul", "cinematic"],
    spotifyTrackId: "3SlzU3OAffqeOt6wwX6mSq",
  },
  {
    title: "Apna Bana Le",
    artist: "Sachin-Jigar, Arijit Singh",
    bpm: 100,
    tags: ["pop", "groove", "cinematic"],
    spotifyTrackId: "6MkJWiXA5FLKLsHDt9cD0Z",
  },
  {
    title: "Chaleya",
    artist: "Anirudh Ravichander, Arijit Singh, Shilpa Rao",
    bpm: 102,
    tags: ["pop", "groove", "bold"],
    spotifyTrackId: "3LXWe3uFG6hbCnIgQUjCQk",
  },
  {
    title: "Channa Mereya",
    artist: "Pritam, Arijit Singh",
    bpm: 92,
    tags: ["soul", "calm", "cinematic"],
    spotifyTrackId: "2Ex2Zh6f4dVxj43H5zSxJB",
  },
  {
    title: "Hawayein",
    artist: "Pritam, Arijit Singh",
    bpm: 96,
    tags: ["indie", "calm", "cinematic"],
    spotifyTrackId: "6871FKHumiy1Wfr6vF7Xxt",
  },
  {
    title: "Kesariya",
    artist: "Pritam, Arijit Singh",
    bpm: 90,
    tags: ["pop", "cinematic", "soul"],
    spotifyTrackId: "6VBhH7CyP56BXjp8VsDFPZ",
  },
  {
    title: "Dil Diyan Gallan",
    artist: "Vishal-Shekhar, Atif Aslam",
    bpm: 88,
    tags: ["calm", "soul", "rnb"],
    spotifyTrackId: "58ebIcqSwl10Abgd6YQNAk",
  },
  {
    title: "Jeena Jeena",
    artist: "Atif Aslam",
    bpm: 98,
    tags: ["acoustic", "calm", "groove"],
    spotifyTrackId: "4PG9kBtJ2ib2YvzlwbofUM",
  },
  {
    title: "Iktara",
    artist: "Amit Trivedi, Kavita Seth",
    bpm: 82,
    tags: ["acoustic", "focus", "calm"],
    spotifyTrackId: "73PhAxlQ9W13Jy4ikUtHtV",
  },
  {
    title: "Saibo",
    artist: "Sachin-Jigar, Shreya Ghoshal, Tochi Raina",
    bpm: 94,
    tags: ["acoustic", "soul", "calm"],
    spotifyTrackId: "1vc2yiUsaDbAjcXQp5qM8A",
  },
  {
    title: "Sajni",
    artist: "Ram Sampath, Arijit Singh",
    bpm: 86,
    tags: ["indie", "calm", "focus"],
    spotifyTrackId: "5zCnGtCl5Ac5zlFHXaZmhy",
  },
  {
    title: "Ranjha",
    artist: "Jasleen Royal, B Praak, Romy",
    bpm: 94,
    tags: ["cinematic", "soul", "calm"],
    spotifyTrackId: "72zHuDxFQTjbL51qJQSA7j",
  },
  {
    title: "Raataan Lambiyan",
    artist: "Tanishk Bagchi, Jubin Nautiyal, Asees Kaur",
    bpm: 103,
    tags: ["pop", "groove", "calm"],
    spotifyTrackId: "4uxO0ZzMKmPabWq4a5Hbnl",
  },
];

const vibeMap = {
  calm: "calm cloud",
  groove: "sunset bounce",
  pop: "hook-heavy glow",
  dance: "club pulse",
  hype: "adrenaline rush",
  indie: "indie daydream",
  alt: "left-field cool",
  cinematic: "cinematic sweep",
  rnb: "velvet late-night",
  soul: "soul warmth",
  focus: "deep-focus drift",
  acoustic: "acoustic comfort",
  bold: "main-character confidence",
};

const form = document.getElementById("quiz-form");
const playlist = document.getElementById("playlist");
const insights = document.getElementById("insights");
const resultSummary = document.getElementById("result-summary");
const resetButton = document.getElementById("reset-button");

renderQuestions();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const answers = collectAnswers();
  if (!answers) {
    resultSummary.textContent = "Please answer all 10 questions before generating your playlist.";
    return;
  }

  const profile = buildProfile(answers);
  const generatedPlaylist = buildPlaylist(profile);

  renderInsights(profile);
  renderPlaylist(generatedPlaylist);
  resultSummary.textContent = `Your Hindi playlist leans ${profile.energyLabel}-energy and blends ${profile.vibes.join(", ")} on Spotify.`;
});

resetButton.addEventListener("click", () => {
  form.reset();
  insights.hidden = true;
  insights.innerHTML = "";
  playlist.className = "playlist empty";
  playlist.innerHTML = "<p>Your songs will appear here after the 10th answer.</p>";
  resultSummary.textContent = "Fill in the questionnaire to generate your personalized mix.";
});

function renderQuestions() {
  form.innerHTML = `
    <div class="results-header">
      <p class="eyebrow">Questionnaire</p>
      <h2>Answer all 10 prompts</h2>
      <p class="muted">Each answer shifts the mood, tempo, and texture of a Spotify-ready Indian playlist.</p>
    </div>
    ${questions.map(renderQuestionCard).join("")}
    <div class="quiz-actions">
      <p class="status">The app matches your answers to Hindi and Indian-pop tracks, then embeds Spotify players.</p>
      <button class="primary-button" type="submit">Generate playlist</button>
    </div>
  `;
}

function renderQuestionCard(question, index) {
  return `
    <section class="question-card">
      <div class="question-topline">
        <div>
          <p class="question-count">Question ${index + 1}</p>
          <h3>${question.text}</h3>
        </div>
        <span class="pill">${question.id}</span>
      </div>
      <p class="question-help">${question.help}</p>
      <div class="options">
        ${question.options
          .map(
            (option, optionIndex) => `
              <div class="option">
                <input id="${question.id}-${optionIndex}" type="radio" name="${question.id}" value="${optionIndex}" />
                <label for="${question.id}-${optionIndex}">
                  <strong>${option.label}</strong>
                  <span class="option-note">${option.note}</span>
                </label>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function collectAnswers() {
  const answers = [];

  for (const question of questions) {
    const selected = form.querySelector(`input[name="${question.id}"]:checked`);
    if (!selected) {
      return null;
    }

    const option = question.options[Number(selected.value)];
    answers.push(option);
  }

  return answers;
}

function buildProfile(answers) {
  const scores = {};

  answers.forEach((answer) => {
    Object.entries(answer.weights).forEach(([tag, value]) => {
      scores[tag] = (scores[tag] || 0) + value;
    });
  });

  const topTags = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([tag]) => tag);

  const energyScore =
    (scores.hype || 0) * 3 +
    (scores.dance || 0) * 2 +
    (scores.bold || 0) * 2 +
    (scores.groove || 0) -
    (scores.calm || 0) -
    (scores.focus || 0);

  return {
    scores,
    topTags,
    vibes: topTags.map((tag) => vibeMap[tag] || tag),
    energyLabel: energyScore >= 18 ? "high" : energyScore >= 8 ? "medium" : "low",
  };
}

function buildPlaylist(profile) {
  return trackCatalog
    .map((track) => ({
      ...track,
      score: track.tags.reduce((total, tag) => total + (profile.scores[tag] || 0), 0),
    }))
    .sort((a, b) => b.score - a.score || a.bpm - b.bpm)
    .slice(0, 12);
}

function renderInsights(profile) {
  insights.hidden = false;
  insights.innerHTML = `
    <span class="tag">Energy: ${profile.energyLabel}</span>
    ${profile.vibes.map((vibe) => `<span class="tag">${vibe}</span>`).join("")}
  `;
}

function renderPlaylist(tracks) {
  playlist.className = "playlist";
  playlist.innerHTML = tracks
    .map(
      (track, index) => `
        <article class="track">
          <div class="track-number">${index + 1}</div>
          <div class="track-body">
            <div class="track-main">
              <div>
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
                <p class="track-tags">${track.tags.join(" | ")}</p>
              </div>
            </div>
            <div class="track-player">
              <iframe
                title="Spotify player for ${track.title}"
                class="spotify-embed"
                src="https://open.spotify.com/embed/track/${track.spotifyTrackId}?utm_source=generator"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
              <a
                class="preview-link"
                href="https://open.spotify.com/track/${track.spotifyTrackId}"
                target="_blank"
                rel="noreferrer"
              >
                Open in Spotify
              </a>
            </div>
          </div>
          <div class="track-meta">
            <div>${track.bpm} BPM</div>
            <div>Spotify</div>
          </div>
        </article>
      `
    )
    .join("");
}
