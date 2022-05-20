const wolfvid = document.getElementById('wolfvid');
const sam = document.getElementById('sam');
const text = document.getElementById('text');

const videoPlaylist = [
  'KnG2HF0_1w4', // galaxies
  '13Ab0al-goo', // space
  // 'x4m9G_Q8arg', // wolves
  // 'C-COovgAm0s', // wolves
  // 'ZoPDzodh20M', // sunrise
];
const videoId =
  videoPlaylist[
    Math.min(
      Math.floor(Math.random() * videoPlaylist.length),
      videoPlaylist.length - 1
    )
  ];
const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&&showinfo=0&loop=1​`;
wolfvid.src = videoUrl;

window.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', () => {
    window.close();
  });
  wolfvid.addEventListener('click', () => {
    window.close();
  });

  document.addEventListener('mousemove', () => {
    window.close();
  });
  wolfvid.addEventListener('mousemove', () => {
    window.close();
  });

  document.addEventListener('keydown', () => {
    window.close();
  });
  wolfvid.addEventListener('keydown', () => {
    window.close();
  });

  let height = window.innerHeight;
  let width = window.innerWidth;
  let samWidth = sam.width;
  let samleft = Math.random() * (width / 2 - samWidth) + width / 2;
  const samTime = 5000;
  const maxSamLargeWidth = width;
  const maxSamMedWidth = samWidth * 1.5;
  const maxSamSmallWidth = 100;
  const ratio = 16 / 9;
  const iratio = 9 / 16;
  const textTime = 30000;

  if (width / height < ratio) {
    width = Math.ceil(height * ratio);
  } else if (width / height > ratio) {
    height = Math.ceil(width * iratio);
  }

  wolfvid.style.width = `${width}px`;
  wolfvid.style.height = `${height}px`;

  setTimeout(() => {
    sam.style.left = `${samleft}px`;
  }, 0);

  const randomizeSam = () => {
    const widthRnd = Math.random() * 10;
    const maxSamWidth =
      widthRnd < 0.3
        ? maxSamSmallWidth
        : widthRnd < 1
        ? maxSamLargeWidth
        : maxSamMedWidth;
    samWidth = Math.random() * (maxSamWidth / 2) + maxSamWidth / 2;
    let samleft = Math.random() * (width - samWidth);
    sam.style.width = `${samWidth}px`;
    sam.style.left = `${samleft}px`;
  };

  const runRandomizeSam = () => {
    randomizeSam();
    setTimeout(runRandomizeSam, Math.random() * samTime + samTime);
  };
  setTimeout(runRandomizeSam, Math.random() * samTime + samTime);

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

    text.style.left = `${Math.random() * (width - textWidth)}px`;
    text.style.top = `${Math.random() * (height - textHeight)}px`;
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
