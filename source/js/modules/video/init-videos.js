const initVideos = () => {
  let videos = document.querySelectorAll('[data-video]');

  videos.forEach((video) => {
    setupVideo(video);
  });
};

const setupVideo = (video) => {
  const button = video.querySelector('[data-video-button]');
  const poster = video.querySelector('[data-video-poster]');


  button.addEventListener('click', () => {
    const id = video.dataset.video;
    const iframe = createIframe(id);
    button.remove();
    poster.remove();
    video.appendChild(iframe);
  });
};


const createIframe = (id) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('autoplay', '1');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', id);
  iframe.classList.add('iframe');

  return iframe;
};

export {initVideos};
