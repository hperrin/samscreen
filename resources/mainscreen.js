/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.electronAPI.hideCursor();

  const video1 = document.getElementById('video1');
  const video2 = document.getElementById('video2');
  const attrib1 = document.getElementById('attrib1');
  const attrib2 = document.getElementById('attrib2');
  const sam = document.getElementById('sam');
  const text = document.getElementById('text');

  document.addEventListener('click', () => {
    window.close();
  });
  document.addEventListener('mousemove', () => {
    window.close();
  });
  document.addEventListener('keydown', () => {
    window.close();
  });

  const videos = [
    [
      '012389379-Sheep-Domestic-Herd-Hd9233.mkv',
      'Footage provided by RockyMountain, from Pond5',
    ],
    [
      '040329964-Flight-Galaxy.mkv',
      'Footage provided by kastomazer, from Pond5',
    ],
    [
      '041069487-Time-Lapse-Pan-Mountain-Range-.mkv',
      'Footage provided by MountAiryFilms, from Pond5',
    ],
    [
      '042686187-Starry-Night-Mountains-Timelap.mkv',
      'Footage provided by Viktar_Malyshchyts, from Pond5',
    ],
    [
      '045015535-Solar-Storm-Northern-Lights-Ar.mkv',
      'Footage provided by erectus, from Pond5',
    ],
    [
      '046274647-Neurons-3D-Animation-Blue-Back.mkv',
      'Footage provided by bildDOTbewegung, from Pond5',
    ],
    [
      '047161060-Sketches-Space-Planetary-Nebul.mkv',
      'Footage provided by selfox, from Pond5',
    ],
    [
      '052301651-Nubble-Lighthouse-Milky-Way-Ri H264hd1080.mkv',
      'Footage provided by MikeVersprill, from Pond5',
    ],
    [
      '055266591-Hurricane-Tornado-Over-Earth-S H264hd1080.mkv',
      'Footage provided by Merlin74, from Pond5',
    ],
    [
      '057032995-Milky-Way-Over-Trees-Yosemite-.mkv',
      'Footage provided by maikthomas, from Pond5',
    ],
    [
      '057718207-Carina-Nebula-3-Dimensions-Hd.mkv',
      'Footage provided by Rebus_Productions, from Pond5',
    ],
    [
      '061744311-Doctor-Examines-Human-Brain-Mr.mkv',
      'Footage provided by Fanta, from Pond5',
    ],
    [
      '070409092-Neurons H264hd1080.mkv',
      'Footage provided by Lexxiam, from Pond5',
    ],
    [
      '081779230-4K-Flight-International-Space- H264hd1080.mkv',
      'Footage provided by icetray, from Pond5',
    ],
    [
      '086188139-Polar-Snow-Rocky-Mountains-Rid H264hd1080.mkv',
      'Footage provided by icetray, from Pond5',
    ],
    [
      '092736884-Planets-Space-Jupiter-Animatio H264hd1080.mkv',
      'Footage provided by blueQmedia, from Pond5',
    ],
    [
      '095990899-3D-Blue-Sci-Fi-Planet-Eye-Tunn.mkv',
      'Footage provided by davedigitalfx, from Pond5',
    ],
    [
      '097957950-Space-Flight-Star-Field-Space- H264hd1080.mkv',
      'Footage provided by spieldbergo, from Pond5',
    ],
    [
      '102590823-Colorful-Aurora-Borealisnorthe H264hd1080.mkv',
      'Footage provided by shanghaiface, from Pond5',
    ],
    [
      '105005003-Aerial-View-Beautiful-Sunset-O H264hd1080.mkv',
      'Footage provided by TuskaTauno, from Pond5',
    ],
    [
      '114624435-Dna-Strand-Genome-Image-5-A4c- H264hd1080.mkv',
      'Footage provided by bluebackimage, from Pond5',
    ],
    [
      '117243532-Natural-Looking-Dna-Helices-Ro.mkv',
      'Footage provided by Elgatorojo, from Pond5',
    ],
    [
      '124541114-Sci-Fi-Cosmic-Looping-Tunnel H264hd1080.mkv',
      'Footage provided by Freezman, from Pond5',
    ],
    [
      '127892105-Sci-Fi-Backgrounds H264hd1080.mkv',
      'Footage provided by westockanim, from Pond5',
    ],
    ['Heic1603a.mkv', 'Footage provided by ESA/Hubble, M. Kornmesser'],
    [
      'Heic1712a.mkv',
      'Footage provided by ESA/Hubble, Digitized Sky Survey, Nick Risinger (skysurvey.org)',
    ],
    [
      'Heic1712b.mkv',
      'Footage provided by ESA/Hubble, Digitized Sky Survey, Nick Risinger (skysurvey.org)',
    ],
    ['Heic1717b.mkv', 'Footage provided by ESO/L. Calçada'],
    ['Hubblecast43b.mkv', 'Footage provided by ESA/Hubble (M. Kornmesser)'],
    ['Hubblecast43c.mkv', 'Footage provided by ESA/Hubble (M. Kornmesser)'],
    ['Hubblecast64b.mkv', 'Footage provided by ESA/Hubble (L. Calçada)'],
    ['Hubblecast64c.mkv', 'Footage provided by ESA/Hubble (M. Kornmesser)'],
    ['Hubblecast70b.mkv', 'Footage provided by ESA/Hubble and M. Kornmesser'],
  ];
  shuffleArray(videos);
  let i = -1;
  const playNextVideo = (dest) => {
    if (i === videos.length - 1) {
      i = -1;
    }
    i++;

    const nexti = i === videos.length - 1 ? 0 : i + 1;
    const video = dest === 1 ? video1 : video2;
    const nextVideo = dest === 1 ? video2 : video1;
    const attrib = dest === 1 ? attrib1 : attrib2;
    const nextAttrib = dest === 1 ? attrib2 : attrib1;

    const videoFile = videos[i][0];
    const videoAttrib = videos[i][1];
    const videoUrl = `video/${videoFile}`;
    const nextFile = videos[nexti][0];
    const nextUrl = `video/${nextFile}`;

    if (video.src !== videoUrl) {
      video.src = videoUrl;
    }
    attrib.innerText = videoAttrib;
    attrib.style.display = 'block';
    nextAttrib.style.display = 'none';
    video.style.display = 'block';
    video.play();

    // Preload the next video.
    nextVideo.src = nextUrl;
    nextVideo.style.display = 'none';
    nextVideo.pause();
  };

  playNextVideo();

  video1.addEventListener('ended', () => {
    playNextVideo(2);
  });
  video2.addEventListener('ended', () => {
    playNextVideo(1);
  });

  const ratio = 16 / 9;
  const iratio = 9 / 16;
  let videoHeight = window.innerHeight;
  let videoWidth = window.innerWidth;
  if (videoWidth / videoHeight < ratio) {
    videoWidth = Math.ceil(videoHeight * ratio);
  } else if (videoWidth / videoHeight > ratio) {
    videoHeight = Math.ceil(videoWidth * iratio);
  }

  video1.style.width = `${videoWidth}px`;
  video1.style.height = `${videoHeight}px`;
  video2.style.width = `${videoWidth}px`;
  video2.style.height = `${videoHeight}px`;

  let samWidth = sam.width;
  let samleft =
    Math.random() * (window.innerWidth / 2 - samWidth) + window.innerWidth / 2;
  const samSizeTime = 5000;
  const maxSamLargeWidth = window.innerWidth;
  const maxSamMedWidth = samWidth * 1.5;
  const maxSamSmallWidth = 100;
  const samPicTime = 60000;
  const textTime = 30000;

  setTimeout(() => {
    sam.style.left = `${samleft}px`;
  }, 0);

  const randomizeSamSize = () => {
    const widthRnd = Math.random() * 10;
    const maxSamWidth =
      widthRnd < 0.3
        ? maxSamSmallWidth
        : widthRnd < 1
        ? maxSamLargeWidth
        : maxSamMedWidth;
    samWidth = Math.random() * (maxSamWidth / 2) + maxSamWidth / 2;
    let samleft = Math.random() * (window.innerWidth - samWidth);
    sam.style.width = `${samWidth}px`;
    sam.style.left = `${samleft}px`;
  };
  const runRandomizeSamSize = () => {
    randomizeSamSize();
    setTimeout(runRandomizeSamSize, Math.random() * samSizeTime + samSizeTime);
  };
  setTimeout(runRandomizeSamSize, Math.random() * samSizeTime + samSizeTime);

  const randomizeSamPic = () => {
    const rnd = Math.min(Math.floor(Math.random() * 4), 3);
    const url = `sams/sam${rnd + 1}.png`;
    sam.classList.add('scoot-away');
    setTimeout(() => {
      sam.src = url;
      sam.classList.remove('scoot-away');
    }, 500);
  };
  const runRandomizeSamPic = () => {
    randomizeSamPic();
    setTimeout(runRandomizeSamPic, Math.random() * samPicTime + samPicTime);
  };
  setTimeout(runRandomizeSamPic, Math.random() * samPicTime + samPicTime);

  const animationSets = [
    ['animate__bounceIn', 'animate__bounceOut'],
    ['animate__fadeIn', 'animate__fadeOut'],
    ['animate__fadeInDown', 'animate__fadeOutDown'],
    ['animate__fadeInLeft', 'animate__fadeOutLeft'],
    ['animate__fadeInRight', 'animate__fadeOutRight'],
    ['animate__fadeInUp', 'animate__fadeOutUp'],
    ['animate__fadeInTopLeft', 'animate__fadeOutTopLeft'],
    ['animate__fadeInTopRight', 'animate__fadeOutTopRight'],
    ['animate__fadeInBottomLeft', 'animate__fadeOutBottomLeft'],
    ['animate__fadeInBottomRight', 'animate__fadeOutBottomRight'],
    ['animate__flipInX', 'animate__flipOutX'],
    ['animate__flipInY', 'animate__flipOutY'],
    ['animate__rotateIn', 'animate__rotateOut'],
    ['animate__rotateInDownLeft', 'animate__rotateOutDownLeft'],
    ['animate__rotateInDownRight', 'animate__rotateOutDownRight'],
    ['animate__rotateInUpLeft', 'animate__rotateOutUpLeft'],
    ['animate__rotateInUpRight', 'animate__rotateOutUpRight'],
    ['animate__rollIn', 'animate__rollOut'],
    ['animate__zoomIn', 'animate__zoomOut'],
    ['animate__zoomInDown', 'animate__zoomOutDown'],
    ['animate__zoomInLeft', 'animate__zoomOutLeft'],
    ['animate__zoomInRight', 'animate__zoomOutRight'],
    ['animate__zoomInUp', 'animate__zoomOutUp'],
  ];
  const lines = [
    'Galaxy Brain',
    'Neanderthal DNA',
    'Do you even meditate?',
    'Racial Profiling',
    'Oooh kay',
    'Lonely at the top',
    'Bad Faith Actors',
  ];
  let lastAnimationSet = null;
  const galaxyBrainText = (set, line) => {
    if (lastAnimationSet) {
      text.classList.remove(...lastAnimationSet);
    }

    const fontSize = Math.random() * 4 + 4;
    text.style.fontSize = `${fontSize}rem`;
    text.style.left = `-1000px`;
    text.style.top = `-1000px`;
    text.querySelector('div').innerText = line;
    const { width: textWidth, height: textHeight } =
      text.getBoundingClientRect();

    text.style.left = `${Math.random() * (window.innerWidth - textWidth)}px`;
    text.style.top = `${Math.random() * (window.innerHeight - textHeight)}px`;
    text.classList.add(set[0]);

    setTimeout(() => {
      text.classList.remove(set[0]);
      text.classList.add(set[1]);
    }, 8000);

    lastAnimationSet = set;
  };

  const runGalaxyBrainText = () => {
    const animationSet =
      animationSets[
        Math.min(
          Math.floor(Math.random() * animationSets.length),
          animationSets.length - 1
        )
      ];
    const line =
      lines[
        Math.min(Math.floor(Math.random() * lines.length), lines.length - 1)
      ];
    galaxyBrainText(animationSet, line);
    setTimeout(runGalaxyBrainText, Math.random() * textTime + textTime);
  };
  setTimeout(runGalaxyBrainText, Math.random() * textTime + textTime);
});
