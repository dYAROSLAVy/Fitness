const createIframe = (id) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', id);
  iframe.classList.add('iframe');

  return iframe;
};

const setupVideo = (video) => {
  const button = video.querySelector('[data-video-button]');
  const poster = video.querySelector('[data-video-poster]');

  if (button === null || poster === null) {
    return;
  }

  button.addEventListener('click', () => {
    const id = video.dataset.video;
    const iframe = createIframe(id);
    button.remove();
    poster.remove();
    video.appendChild(iframe);
  });
};

const initVideos = () => {
  const videos = document.querySelectorAll('[data-video]');

  if (!videos.length) {
    return;
  }

  videos.forEach((video) => {
    setupVideo(video);
  });
};

export {initVideos};
