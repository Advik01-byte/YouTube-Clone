import { videos } from '../data/videos.js';

/*
  Main idea of JavaScript:
    1. Save the data {Done in the videos.js file in the data folder}
    2. Generate the HTML
    3. Make it interactive (not following this time)
*/

let videosHTML = '';

videos.forEach((video) => {
  videosHTML += `
    <a href="${video.link}" target="_blank" class="video-link">
      <div class="video-preview">
        <div class="thumbnail-row">
          <img src="${video.images.thumbnail}" class="css-thumbnail">
          <div class="video-time">
            ${video.videoTime}
          </div>
        </div>
        <div class="video-info-grid">
          <div class="css-channel-picture">
            <img src="${video.images.channel}" class="css-profile-picture">
          </div>
          <div class="css-video-info">
            <p class="css-video-title">
              ${video.title}
            </p>
            <p class="css-video-author">
              ${video.author}
            </p>
            <p class="css-video-stats">
              ${video.stats}
            </p>
          </div>
        </div>
      </div>
    </a>
  `;
});


document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.js-video-grid').innerHTML = videosHTML;
});

