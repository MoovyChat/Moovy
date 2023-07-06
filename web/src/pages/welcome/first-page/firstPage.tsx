import React from 'react';
import { StyledFirstPage } from './firstPage.styles';
import InstallExtension from '../install-extension/installExtension';
import ImageWithFadeIn from '../../../components/image-with-fadeIn/imageWithFadeIn';
import Dark300 from '../../../static/images/dark-chat-300x.webp';
import Dark600 from '../../../static/images/dark-chat-600x.webp';
import Light300 from '../../../static/images/light-chat-300x.webp';
import Light600 from '../../../static/images/light-chat-600x.webp';

const FirstPage = () => {
  return (
    <StyledFirstPage>
      <div className="flex-1">
        <div>
          <h1>MoovyChat - Comment on Movies and TV Shows & watch together</h1>
        </div>
        <div>
          <p>
            MoovyChat is a chrome extension that allows users to comment on
            episodes and movies available on popular OTT platforms like Netflix
            and Aha. It also features MoovyNest, a watch together feature.
          </p>
        </div>
        <InstallExtension />
      </div>
      <div className="flex-1 flex-pics">
        <div className="pics">
          <div className="first pic">
            <picture>
              <ImageWithFadeIn
                className="image"
                src300={Light300}
                src600={Light600}
                alt="light"
                sizes="300px"
                width="300"
                height="487"
              />
            </picture>
          </div>
          <div className="second pic">
            <picture>
              <ImageWithFadeIn
                className="image"
                src300={Dark300}
                src600={Dark600}
                alt="dark"
                sizes="300px"
                width="300"
                height="509"
              />
            </picture>
          </div>
        </div>
      </div>
    </StyledFirstPage>
  );
};

export default FirstPage;
